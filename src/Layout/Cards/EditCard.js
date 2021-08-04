import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import CardForm from "../Common/CardForm";
import Breadcrumb from "../Common/Breadcrumb";
import { readDeck, readCard, updateCard } from "../../utils/api";

function EditCard() {
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  useEffect(() => {
    const abortController = new AbortController();
    try {
      readCard(cardId, abortController.signal).then(setCard);
      return () => abortController.abort();
    } catch (error) {
      console.log(error);
    }
  }, [cardId]);

  const changeHandler = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    updateCard(card);
    window.alert(`You edited a card!`);
    history.push(`/decks/${deckId}`);
  };

  const breadCrumbLinks = [
    { dir: `/decks/${deckId}`, label: `${deck.name}` },
    { dir: "", label: "Edit Card" },
  ];

  return (
    <div className="container">
      <Breadcrumb links={breadCrumbLinks} />
      <h1>Edit Card</h1>
      <CardForm
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        front={card.front}
        back={card.back}
        frontPlaceHolder={card.front}
        backPlaceHolder={card.back}
        cancelLink={`/decks/${deckId}`}
      />
    </div>
  );
}

export default EditCard;
import React, { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router";
import CardForm from "../Common/CardForm";
import Breadcrumb from "../Common/Breadcrumb";
import { readDeck, readCard, updateCard } from "../../utils/api";

function EditCard() {
  /* Edit card from a specific deck */
  const { deckId, cardId } = useParams();
  const url = useLocation().pathname; 
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  
  // Deck information
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  // Card information
  useEffect(() => {
    const abortController = new AbortController();
    try {
      readCard(cardId, abortController.signal).then(setCard);
      return () => abortController.abort();
    } catch (error) {
      console.log(error);
    }
  }, [cardId]);

  const changeHandler = ({ target }) => {
    setCard({ ...card, [target.id]: target.value });
  };

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    updateCard(card);
    window.alert(`You edited a card!`);
    history.push(`/decks/${deckId}`); // send user to deck page
  };

  const breadCrumbLinks = [
    { dir: `/decks/${deckId}`, label: `${deck.name}` },
    { dir: `${url}`, label: "Edit Card" },
  ];

  return (
    <div className="container">
      <Breadcrumb links={breadCrumbLinks} />
      <h1>Edit Card</h1>
      <CardForm
        type="edit"
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        front={card.front}
        back={card.back}
        cancelLink={`/decks/${deckId}`}
      />
    </div>
  );
}

export default EditCard;
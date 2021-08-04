import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import CardForm from "../Common/CardForm";
import Breadcrumb from "../Common/Breadcrumb";
import { createCard, readDeck } from "../../utils/api";

function AddCard() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  const changeHandler = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  const history = useHistory(); 

  const submitHandler = (event) => {
    event.preventDefault();
    createCard(deckId, card);
    window.alert(`You created a new card`);
    history.go(0); 
  };

  const breadCrumbLinks = [
    { dir: "/decks/new", label: `${deck.name}` },
    { dir: "", label: "Add Card" },
  ];

  return (
    <div className="container">
      <Breadcrumb links={breadCrumbLinks} />
      <h1>{`${deck.name}: Add Card`}</h1>
      <CardForm
        type="add"
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        front={card.front}
        back={card.back}
        frontPlaceHolder="Front side of Card"
        backPlaceHolder="Back side of Card"
        cancelLink={`/decks/${deckId}`}
      />
    </div>
  );
}

export default AddCard;

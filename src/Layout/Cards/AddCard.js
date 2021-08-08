import React, { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import CardForm from "../Common/CardForm";
import Breadcrumb from "../Common/Breadcrumb";
import { createCard, readDeck } from "../../utils/api";

function AddCard() {
  /* Add new card to a deck */
  const { deckId } = useParams();
  const url = useLocation().pathname; 
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  // Current Deck information
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  // Add input to the card object
  const changeHandler = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    createCard(deckId, card);
    window.alert(`You created a new card`);
    history.go(0); // refresh the page when user creates a new card
  };

  const breadCrumbLinks = [
    { dir: `/decks/${deckId}`, label: `${deck.name}` },
    { dir: `${url}`, label: "Add Card" },
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

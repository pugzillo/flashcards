import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardForm from "../Common/CardForm";
import Breadcrumb from "../Common/Breadcrumb";
import { readDeck } from "../../utils/api";

function AddCard() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  console.log(deck)

  const breadCrumbLinks = [
    { dir: "/decks/new", label: `${deck.name}` },
    { dir: "", label: "Add Card" },
  ];

  return (
    <div className="container">
      <Breadcrumb links={breadCrumbLinks} />
    </div>
  );
}

export default AddCard;
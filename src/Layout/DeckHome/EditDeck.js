import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { readDeck, updateDeck } from "../../utils/api";
import Breadcrumb from "../Common/Breadcrumb";
import Form from "../Common/Form";

function EditDeck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({id:"", name:"", description:"", cards:[]}); // used for breadcrumb; have both so deck var can be changed separately
  const [newDeck, setNewDeck] = useState({id:"", name:"", description:"", cards:[]}); // used for form

  // Old Deck info
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  // New Deck Info
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setNewDeck);
    return () => abortController.abort();
  }, [deckId]);

  const changeHandler = (event) => {
    setNewDeck({ ...newDeck, [event.target.name]: event.target.value });
  };

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    updateDeck(newDeck);
    history.go(0); // Refresh after submit
  };

  const breadCrumbLinks = [
    { dir: `/decks/${deckId}`, label: `${deck.name}` },
    { dir: `/decks/${deckId}/edit`, label: "Edit Deck" },
  ];

  const cancelLink = `/decks/${deckId}`;

  return (
    <div className="container">
      <Breadcrumb links={breadCrumbLinks} />

      <h1>Edit Deck</h1>
      <Form
        cancelLink={cancelLink}
        deckName={newDeck.name}
        deckDescription={newDeck.description}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
    </div>
  );
}

export default EditDeck;

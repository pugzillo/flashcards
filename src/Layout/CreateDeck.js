import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import Breadcrumb from "./Common/Breadcrumb";
import Form from "./Common/Form";

function CreateDeck() {
  /* Create Deck Page */
  const [deck, setDeck] = useState({});

  const changeHandler = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    createDeck(deck);
    window.alert(`You created a new deck: ${deck.name}`);
    history.push("/"); // send user to home page after create deck
  };

  const breadCrumbLinks = [{ dir: "/decks/new", label: "Create Deck" }];

  const cancelLink = "/";

  return (
    <div className="container">
      <Breadcrumb links={breadCrumbLinks} />

      <h1>Create Deck</h1>

      <Form
        cancelLink={cancelLink}
        deckName={deck.name}
        deckDescription={deck.description}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
    </div>
  );
}

export default CreateDeck;

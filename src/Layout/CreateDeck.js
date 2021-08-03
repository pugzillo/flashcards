import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import Breadcrumb from "./Common/Breadcrumb";
import Form from "./Common/Form";

function CreateDeck() {
  const [deck, setDeck] = useState({});

  const changeHandler = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    createDeck(deck); 
    window.alert(`You created a new deck: ${deck.name}`);
    history.push("/");
  };

  const breadCrumbLinks = [
    { dir: "/decks/new", label: "Create Deck" },
  ];

  const cancelLink = "/"; 

  return (
    <div className="container">
      <Breadcrumb links={breadCrumbLinks} />

      <h1>Create Deck</h1>

      <Form cancelLink={cancelLink} deckName={deck.name} deckDescription={deck.description} submitHandler={submitHandler} changeHandler={changeHandler} />

      {/* <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            aria-describedby="deckName"
            placeholder="Deck Name"
            onChange={changeHandler}
            value={deck.name}
          ></input>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">
            Deck Description
          </label>
          <textarea
            type="text"
            class="form-control"
            id="description"
            name="description"
            aria-describedby="deckDescription"
            placeholder="Deck Description"
            onChange={changeHandler}
            value={deck.description}
          ></textarea>
        </div>
        <Link to="/" class="btn btn-secondary" href="#" role="button">
          Cancel
        </Link>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form> */}
    </div>
  );
}

export default CreateDeck;

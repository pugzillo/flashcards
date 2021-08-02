import React from "react";
import { Link } from "react-router-dom";

function CreateDeck() {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">
              <span class="oi oi-home"></span>
              Home
            </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>

      <h1>Create Deck</h1>

      <form>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="name"
            class="form-control"
            id="name"
            aria-describedby="deckName"
            placeholder="Deck Name"
          ></input>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">
            Deck Description
          </label>
          <textarea
            type="email"
            class="form-control"
            id="description"
            aria-describedby="deckName"
            placeholder="Deck Description"
          ></textarea>
        </div>
        <Link to="/" class="btn btn-secondary" href="#" role="button">
          Cancel
        </Link>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateDeck;

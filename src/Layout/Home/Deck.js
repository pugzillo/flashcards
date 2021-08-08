import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function Deck({ key, id, deck, name, description }) {
  /* Deck card component used on Home page */
  const history = useHistory();
  const cardCount = deck.cards.length;

  const handleDeckDelete = () => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      deleteDeck(id);
      history.go(0); // refresh home page after delete deck
    }
  };

  return (
    <div
      className="card"
      key={key}
      style={{ width: "30rem", marginBottom: "10px", marginTop: "10px" }}
    >
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-count">{`${cardCount} cards`}</p>
        <p className="card-text">{description}</p>
        <p className="card-buttons">
          <Link
            to={`decks/${id}`}
            className="btn btn-primary"
            href="#"
            role="button"
          >
            View
          </Link>
          <Link
            to={`decks/${id}/study`}
            className="btn btn-primary"
            href="#"
            role="button"
          >
            Study
          </Link>
          <Link
            to={`decks/${id}/edit`}
            className="btn btn-primary"
            href="#"
            role="button"
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeckDelete}
          >
            <span className="oi oi-trash"></span> Delete
          </button>
        </p>
      </div>
    </div>
  );
}

export default Deck;

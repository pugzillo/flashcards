import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck, listCards } from "../../utils/api";

function Deck({ id, deck, description }) {
  const [cardCount, setCardCount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    listCards(id).then((cards) => setCardCount(cards.length));
  });

  const handleDeckDelete = () => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      deleteDeck(id);
      history.go(0);
    }
  };

  return (
    <div className="card" style={{ width: "30rem", marginBottom: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">{deck}</h5>
        <p className="card-count">{`${cardCount} cards`}</p>
        <p className="card-text">{description}</p>
        <p className="card-buttons">
          <Link
            to={`decks/${id}`}
            class="btn btn-primary"
            href="#"
            role="button"
          >
            View
          </Link>
          <Link
            to={`decks/${id}/study`}
            class="btn btn-primary"
            href="#"
            role="button"
          >
            Study
          </Link>
          <Link
            to={`decks/${id}/edit`}
            class="btn btn-primary"
            href="#"
            role="button"
          >
            Edit
          </Link>
          <button
            type="button"
            class="btn btn-primary"
            onClick={handleDeckDelete}
          >
            Delete
          </button>
        </p>
      </div>
    </div>
  );
}

export default Deck;

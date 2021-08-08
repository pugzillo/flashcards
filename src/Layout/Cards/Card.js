import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function Card({ card, deckId }) {
  /* Card w/front and back text on display; Used for Deck Homepage(DeckHome.js) */
  const history = useHistory();

  const handleCardDelete = () => {
    if (window.confirm("Delete this card?")) {
      deleteCard(card.id);
      history.go(0); // refresh page after deletion
    }
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text">{card.front}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text">{card.back}</p>
            <p className="card-links">
              <Link
                to={`/decks/${deckId}/cards/${card.id}/edit`}
                className="btn btn-primary"
                href="#"
                role="button"
              >
                Edit
              </Link>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleCardDelete}
              >
                <span className="oi oi-trash"></span> Delete
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

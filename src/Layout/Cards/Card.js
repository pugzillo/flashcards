import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function Card({ id, front, back, deckId }) {

  const history = useHistory();

  const handleCardDelete = () => {
    if (window.confirm("Delete this card?")) {
      deleteCard(id);
      history.go(0);
    }
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text">{front}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text">{back}</p>
            <p className="card-links">
              <Link to={`/decks/${deckId}/cards/${id}/edit`} className="btn btn-primary" href="#" role="button">
                Edit
              </Link>
              <button type="button" className="btn btn-primary" onClick={handleCardDelete}>
                Delete
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

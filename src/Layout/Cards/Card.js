import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function Card({ id }) {
  const [card, setCard] = useState({});

  const history = useHistory();

  const handleCardDelete = () => {
    if (window.confirm("Delete this card?")) {
      setCard(deleteCard(id));
      history.go(0);
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
              <Link to="" className="btn btn-primary" href="#" role="button">
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

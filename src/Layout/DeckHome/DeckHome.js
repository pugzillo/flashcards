import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api";
import Breadcrumb from "../Common/Breadcrumb";
import Card from "../Cards/Card";

function DeckHome() {
  /* Home page for an individual deck */
  const { deckId } = useParams();
  const [deck, setDeck] = useState();

  // Reads deck info when deck id changes
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  const history = useHistory();

  const handleDeckDelete = () => {
    if (window.confirm("Delete this Deck?")) {
      setDeck(deleteDeck(deck.id));
      history.push("/"); // sends user to home
    }
  };

  if (deck) {
    const breadCrumbLinks = [
      { dir: `/decks/${deckId}`, label: `${deck.name}` },
    ];
    return (
      <div className="container">
        <Breadcrumb links={breadCrumbLinks} />
        <h1>{deck.name}</h1>
        <p>{deck.description}</p>
        <p>
          <Link
            to={`/decks/${deck.id}/edit`}
            className="btn btn-primary"
            href="#"
            role="button"
          >
            Edit
          </Link>
          <Link
            to={`/decks/${deck.id}/study`}
            className="btn btn-primary"
            href="#"
            role="button"
          >
            Study
          </Link>
          <Link
            to={`/decks/${deck.id}/cards/new`}
            className="btn btn-primary"
            href="#"
            role="button"
          >
            Add
          </Link>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleDeckDelete}
          >
            Delete
          </button>
        </p>

        <div className="deck-cards">
          <h1>Cards</h1>
          <div className="cards">
            <section className="column">
              {deck.cards.map((card) => (
                <Card key={card.id.toString()} card={card} deckId={deckId} />
              ))}
            </section>
          </div>
        </div>
      </div>
    );
  } else {
    return "No deck found";
  }
}

export default DeckHome;

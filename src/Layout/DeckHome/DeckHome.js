import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck, deleteDeck, listCards } from "../../utils/api";
import Card from "../Cards/Card";

function DeckHome() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState();
  const [cards, setCards] = useState([]);

  // Reads deck info when deck id changes
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  //   reads card info for deck
  useEffect(() => {
    const abortController = new AbortController();
    listCards(deckId, abortController.signal).then(setCards);
    return () => abortController.abort();
  }, [deckId]);

  const history = useHistory();

  const handleDeckDelete = () => {
    if (window.confirm("Delete this Deck?")) {
      setDeck(deleteDeck(deck.id));
      history.push("/"); // TODO: sends user to home that isn't refreshed with new info
    }
  };

  const cardList = cards.map((card) => (
    <Card id={card.id} front={card.front} back={card.back} />
  ));

  if (deck) {
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <span className="oi oi-home"></span>
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
          </ol>
        </nav>
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
            to={`/decks/${deck.id}/study`}
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
            <section className="column">{cardList}</section>
          </div>
        </div>
      </div>
    );
  } else {
    return "No deck found";
  }
}

export default DeckHome;

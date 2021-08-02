import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck, deleteDeck, listCards } from "../../utils/api";
import Card from "../Cards/Card";

function DeckHome() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  useEffect(() => {
    const abortController = new AbortController();
    listCards(deckId, abortController.signal).then(setCards);
    return () => abortController.abort();
  }, [deckId]);

  const history = useHistory();

  const handleDeckDelete = () => {
    if (window.confirm("Delete this Deck?")) {
      setDeck(deleteDeck(deck.id));
      history.push("/");
    }
  };

  const cardList = cards.map((card) => (
    <Card id={card.id} front={card.front} back={card.back} />
  ));

  if (deck) {
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
              {deck.name}
            </li>
          </ol>
        </nav>
        <h1>{deck.name}</h1>
        <p>{deck.description}</p>
        <p>
          <Link
            to={`/decks/${deck.id}/edit`}
            class="btn btn-primary"
            href="#"
            role="button"
          >
            Edit
          </Link>
          <Link
            to={`/decks/${deck.id}/study`}
            class="btn btn-primary"
            href="#"
            role="button"
          >
            Study
          </Link>
          <Link
            to={`/decks/${deck.id}/study`}
            class="btn btn-primary"
            href="#"
            role="button"
          >
            Add
          </Link>
          <button
            type="button"
            class="btn btn-primary"
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

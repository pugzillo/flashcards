import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Deck from "./Deck";
import { listDecks } from "../../utils/api";

function DeckList() {
  const [decks, setDecks] = useState([]);
  
  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks);
    return () => abortController.abort();
  }, []);

  const list = decks.map((deck) => (
    <Deck id={deck.id} deck={deck.name} description={deck.description} />
  ));

  return (
    <div className="Home">
      <Link to="/decks/new" class="btn btn-primary" href="#" role="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        Create Deck
      </Link>
      <main className="container">
        <section className="column">{list}</section>
      </main>
    </div>
  );
}

export default DeckList;

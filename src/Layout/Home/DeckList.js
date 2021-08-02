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
        <span class="oi oi-plus"></span> Create Deck
      </Link>
      <main className="container">
        <section className="column">{list}</section>
      </main>
    </div>
  );
}

export default DeckList;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Deck from "./Deck";
import { listDecks } from "../../utils/api";

function DeckList() {
  /* Home Page */
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks); // retrieves array of decks from db
    return () => abortController.abort();
  }, []);

  // Creates Deck component for each deck
  const list = decks.map((deck) => (
    <Deck id={deck.id} deck={deck} name={deck.name} description={deck.description} />
  ));

  return (
    <div className="Home">
      <Link to="/decks/new" className="btn btn-primary" href="#" role="button">
        <span className="oi oi-plus"></span> Create Deck
      </Link>
      <main className="container">
        <section className="column">{list}</section>
      </main>
    </div>
  );
}

export default DeckList;

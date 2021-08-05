import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api";
import FlipCard from "../Cards/FlipCard";
import Breadcrumb from "../Common/Breadcrumb";

function StudyDeck() {
  /* Page for Studying cards */
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  let cards = []; // Grab cards from Deck object

  if (deck.cards) {
    cards = deck.cards;
  }

  const [currentCard, setCurrentCard] = useState(0);
  const [orientation, setOrientation] = useState("front");
  const history = useHistory();

  // Reads deck info when deck id changes
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);
  
  // Flips the card when user clicks on flip button
  const HandleFlip = () => {
    if (orientation === "front") {
      setOrientation("back");
    } else if (orientation === "back") {
      setOrientation("front");
    }
  };

  const HandleNext = () => {
    if (
      currentCard + 1 === cards.length &&
      window.confirm("Restart cards? Click 'cancel' to return to the homepage")
    ) {
      history.push("/"); // sends user to home page
    }
    setCurrentCard(currentCard + 1); // moves use to next card
  };

  const breadCrumbLinks = [
    { dir: `/decks/${deckId}`, label: `${deck.name}` },
    { dir: `/decks/${deckId}/study`, label: "Study" },
  ];

  if (cards.length <= 2) {
    // User not allowed to study cards if there are less than or equal to 2
    return (
      <div className="container">
        <Breadcrumb links={breadCrumbLinks} />
        <h1>{`Study: ${deck.name}`}</h1>
        <h2>Not enough cards.</h2>
        <p>{`You need at least 3 cards to study. There are ${cards.length} in this deck.`}</p>
        <p>
          <Link to={`/decks/${deckId}/cards/new`}>Add Card</Link>
        </p>
      </div>
    );
  } else if (deck && cards[currentCard]) {
    return (
      <div className="container">
        <Breadcrumb links={breadCrumbLinks} />
        <h1>{`Study: ${deck.name}`}</h1>
        <FlipCard
          currentCard={currentCard + 1}
          length={cards.length}
          front={cards[currentCard].front}
          back={cards[currentCard].back}
          orientation={orientation}
          HandleFlip={HandleFlip}
          HandleNext={HandleNext}
        />
      </div>
    );
  } else {
    return <h1>No Deck Found</h1>;
  }
}

export default StudyDeck;

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck, listCards } from "../../utils/api";
import FlipCard from "../Cards/FlipCard";

function DeckStudy() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);

  const [currentCard, setCurrentCard] = useState(0);
  const [orientation, setOrientation] = useState("front");

  // Reads deck info when deck id changes
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  // Reads cards within deck
  useEffect(() => {
    const abortController = new AbortController();
    listCards(deckId, abortController.signal).then(setCards);
    return () => abortController.abort();
  }, [deckId]);

  const HandleFlip = () => {
    if (orientation === "front") {
      setOrientation("back");
    } else if (orientation === "back") {
      setOrientation("front");
    }
  }; 

  const HandleNext = () => {
    setCurrentCard(currentCard+1); 
  }

  if (deck && cards[currentCard]) {
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
              {deck.name}
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <h1>{`Study: ${deck.name}`}</h1>
        <FlipCard id={cards[currentCard].id} length={cards.length} front={cards[currentCard].front} back={cards[currentCard].back} orientation={orientation} HandleFlip={HandleFlip} HandleNext={HandleNext} />
      </div>
    );
  } else {
    return <h1>No Deck Found</h1>;
  }
}

export default DeckStudy;

import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { readDeck, updateDeck } from "../../utils/api";
import Breadcrumb from "../Common/Breadcrumb";
import Form from "../Common/Form";

function EditDeck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({}); // used for breadcrumb; have both so deck var can be changed separately
  const [newDeck, setNewDeck] = useState({}); // used for form

  // Old Deck info
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);

  // New Deck Info
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setNewDeck);
    return () => abortController.abort();
  }, [deckId]);

  const changeHandler = (event) => {
    setNewDeck({...newDeck, [event.target.name]: event.target.value });
  };

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    updateDeck(newDeck);
    history.go(0); // Refresh after submit
  };

  const breadCrumbLinks = [
    { dir: "/decks/new", label: `${deck.name}` },
    { dir: "/", label: "Edit Card" },
  ];
  return (
    <div className="container">
      <Breadcrumb links={breadCrumbLinks} />

      <h1>Edit Deck</h1>
      <Form deckId={deckId} deckName={newDeck.name} deckDescription={newDeck.description} submitHandler={submitHandler} changeHandler={changeHandler} />
    </div>
  );
}

export default EditDeck;

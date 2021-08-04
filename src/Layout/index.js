import React, { Fragment } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./Home/DeckList";
import CreateDeck from "./CreateDeck";
import DeckHome from "./DeckHome/DeckHome";
import EditDeck from "./DeckHome/EditDeck";
import StudyDeck from "./DeckHome/StudyDeck";
import AddCard from "./Cards/AddCard";
import EditCard from "./Cards/EditCard";
import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <DeckList />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId">
            <DeckHome />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;

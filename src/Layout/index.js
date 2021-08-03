import React, { Fragment } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./Home/DeckList";
import CreateDeck from "./CreateDeck";
import DeckHome from "./DeckHome/DeckHome";
import EditDeck from "./DeckHome/EditDeck";
import StudyDeck from "./DeckHome/StudyDeck";
import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/decks/new">
            <CreateDeck />
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
          <Route path="/">
            <DeckList />
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

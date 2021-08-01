import React, { Fragment } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./Home/DeckList";
import CreateDeck from  "./CreateDeck";
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

          <Route exact path="/decks/new">
            <CreateDeck />
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

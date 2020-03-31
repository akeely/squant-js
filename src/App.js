import React from 'react';
import Container from "react-bootstrap/Container";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Bets from "./bets/Bets";
import Add from "./bets/Add";
import SquantNav from "./nav/SquantNav";

function App() {

  return (
    <Router>
      <div>
        <Container>
          <SquantNav/>
        </Container>
        <Container>
          <Switch>
            <Route exact path="/">
              <Bets/>
            </Route>
            <Route path="/bets">
              <Bets/>
            </Route>
            <Route path="/add">
              <Add />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;

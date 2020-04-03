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
            <Route path="/bets" render={(props) => {
              let newBet = null;
              if (!!props.location.state) {
                newBet = props.location.state.newBet;
              }
              return (<Bets newBet={newBet} />);
            }} />
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

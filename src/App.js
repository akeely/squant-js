import React from 'react';
import Container from "react-bootstrap/Container";

import Bets from "./bets/Bets";
import SquantNav from "./nav/SquantNav";

function App() {

  return (
      <div>
        <Container>
          <SquantNav/>
        </Container>
        <Container>
          <Bets/>
        </Container>
      </div>
  );
}

export default App;

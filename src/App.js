import React, { Component } from 'react';

import './App.css';

import Bets from './components/bets';
import Menu from './components/menu';
import Trips from './components/trips';

class App extends Component {

  render() {

    return (
      <div>
        <Menu />
        <Bets />
        <Trips />
      </div>
    );
  }
}

export default App;

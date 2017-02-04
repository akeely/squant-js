import React, { Component } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';

import './App.css';

import Bets from './components/bets';
import Menu from './components/menu';
import Trips from './components/trips';

import './css/styles.css';


class App extends Component {

  render() {

    return (
      <div>
        <Menu />
        <Bets />
        <Trips />
        <FloatingActionButton className="fab" secondary={true}>
            <FontIcon className="material-icons">add</FontIcon>
        </FloatingActionButton>
      </div>
    );
  }
}

export default App;

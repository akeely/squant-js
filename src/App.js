import React, { Component } from 'react';

import './App.css';

import Menu from './components/menu';
import Trips from './components/trips';

class App extends Component {

  render() {

    return (
      <div>
        <Menu />
        <Trips />
      </div>
    );
  }
}

export default App;

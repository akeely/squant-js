import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import './App.css';

import Trips from './components/trips'

class App extends Component {

  render() {

    return (
      <div>
        <AppBar title="Boys Boys Boys" />
        <Trips />
      </div>
    );
  }
}

export default App;

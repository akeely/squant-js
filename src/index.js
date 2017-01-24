import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import tripsReducer from './reducers/tripsReducer';

import App from './App';
import './index.css';

const loggerMiddleware = createLogger()

let store = createStore(tripsReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ));

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const ThemedApp = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
      <ThemedApp />
  </Provider>,
  document.getElementById('root')
);

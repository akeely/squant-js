import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import tripsReducer from './reducers/tripsReducer';

import App from './App';
import './index.css';

const loggerMiddleware = createLogger()

let store = createStore(tripsReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

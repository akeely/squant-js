import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    indigo400,
    indigo500,
    indigo700,
    orange500,
    grey100,
    grey300,
    grey400,
    grey500,
    grey600,
    grey700,
    grey900,
    fullBlack,
    white
} from 'material-ui/styles/colors';

import injectTapEventPlugin from 'react-tap-event-plugin';

import betsReducer from './reducers/betsReducer';
import tripsReducer from './reducers/tripsReducer';

import App from './App';
import './index.css';

const loggerMiddleware = createLogger()

let store = createStore(
    combineReducers({
        betsData: betsReducer,
        tripsData: tripsReducer
    }),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ));

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo400,
        primary2Color: indigo500,
        primary3Color: indigo700,
        accent1Color: orange500,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: grey900,
        secondaryTextColor: grey600,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey400,
        disabledColor: grey300,
        pickerHeaderColor: indigo500,
        clockCircleColor: grey700,
        shadowColor: fullBlack,
    }
});

const ThemedApp = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <App />
    </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
      <ThemedApp />
  </Provider>,
  document.getElementById('root')
);

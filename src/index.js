import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pitcherList = (state = ['Someone McSports'], action) => {
  if (action.type === 'ADD_PITCHER') {
    return [...state, action.payload];
  }

  return state;
};

const catcherList = (state = ['Baseball McPerson'], action) => {
  if (action.type === 'ADD_CATCHER') {
    return [...state, action.payload];
  }

  return state;
};

const storedInstance = createStore(
  combineReducers({
    pitcherList,
    catcherList,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storedInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pitcherList = (state, action) => {
  if (action.type === 'ADD_PITCHER') {
    return [...state, action.payload.newPitcher];
  }

  return state;
};

const catcherList = (state, action) => {
  if (action.type === 'ADD_CATCHER') {
    return [...state, action.payload.newCatcher];
  }

  return state;
};

const storedInstance = createStore(
  combineReducers(
    {
      pitcherList,
    },
    applyMiddleware(logger)
  )
);

ReactDOM.render(
  <Provider store={storedInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const defaultPitcherList = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'];
const pitcherList = (state = defaultPitcherList, action) => {
  if (action.type === 'ADD_PITCHER') {
    return [...state, action.payload];
  }

  return state;
};

const defaultCatcherList = ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'];
const catcherList = (state = defaultCatcherList, action) => {
  if (action.type === 'ADD_CATCHER') {
    return [...state, action.payload];
  }

  return state;
};

const currentCatcher = (state = '', action) => {
  if (action.type === 'SELECT_CATCHER') {
    return action.payload;
  }
  return state;
};

const storedInstance = createStore(
  combineReducers({
    pitcherList,
    catcherList,
    currentCatcher,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storedInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

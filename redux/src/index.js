import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import PirateTicTacToe from './PirateTicTacToe';
import reducer from './reducers';
import {emptyBoard} from './helpers';
import {createStore} from 'redux';
import './index.css';

const defaultState = {
  gameState: {
    gameBoard: emptyBoard,
    player: 'X',
    winner: null,
    xWins: 0,
    oWins: 0,
  },
};

ReactDOM.render(
  <Provider store={createStore(reducer, defaultState)}>
    <PirateTicTacToe />
  </Provider>,
  document.getElementById('root'),
);

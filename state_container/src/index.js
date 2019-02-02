import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  NONE,
  DRAW,
  X_WIN_TOTAL,
  O_WIN_TOTAL,
  mapToPrimes,
  flatMapPossibleWins,
} from './helpers';

const emptyBoard = [[NONE, NONE, NONE], [NONE, NONE, NONE], [NONE, NONE, NONE]];

const intents = {
  START: model => {
    return model;
  },
  TAKE_TURN: (model, data) => {
    if (
      model.winner !== NONE ||
      model.gameBoard[data.row][data.square] !== NONE
    )
      return model;

    model.gameBoard[data.row][data.square] = model.turn;
    model.turn = model.turn === 'X' ? 'O' : 'X';
    return model;
  },
  SCORE: model => {
    const primes = mapToPrimes(model.gameBoard);
    const flatPrimes = primes.flatMap(row => row.map(column => column));
    const possilbeWins = flatMapPossibleWins(primes);

    if (possilbeWins.some(r => r === X_WIN_TOTAL)) model.winner = 'X';
    else if (possilbeWins.some(r => r === O_WIN_TOTAL)) model.winner = 'O';
    else if (flatPrimes.every(m => m !== 0)) model.winner = DRAW;

    return model;
  },
};

const update = (
  model = {gameBoard: emptyBoard, turn: 'X', winner: NONE},
  intent,
  data,
) => {
  return intents[intent](model, data);
};

const createStore = reducer => {
  let internalState = undefined;
  let handlers = [];

  return {
    dispatch: (intent, data) => {
      internalState = reducer(internalState, intent, data);
      handlers.forEach(h => h());
    },
    subscribe: handler => handlers.push(handler),
    getState: () => internalState,
  };
};

let container = createStore(update);

const view = model => (
  <div>
    <h1>Tic Tac Toe</h1>
    <div className="ttt-board">
      {model.gameBoard.map((row, row_index) => (
        <div key={row_index} className="ttt-row">
          {row.map((square, square_index) => (
            <div
              key={`${row_index}-${square_index}`}
              className="ttt-square"
              onClick={() => {
                container.dispatch('TAKE_TURN', {
                  row: row_index,
                  square: square_index,
                });

                container.dispatch('SCORE');
              }}>
              {model.gameBoard[row_index][square_index]}
            </div>
          ))}
        </div>
      ))}
    </div>
    <div className="ttt-info">
      {(() => {
        switch (model.winner) {
          case NONE:
            return <span> It's {model.turn}'s turn.</span>;
          case DRAW:
            return <span>DRAW</span>;
          default:
            return <span className="ttt-win">{model.winner} WINS!</span>;
        }
      })()}
    </div>
  </div>
);

function render() {
  ReactDOM.render(view(container.getState()), document.getElementById('root'));
}

container.subscribe(render);
container.dispatch('START');

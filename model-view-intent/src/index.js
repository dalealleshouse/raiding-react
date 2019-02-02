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

let model = {
  gameBoard: [[NONE, NONE, NONE], [NONE, NONE, NONE], [NONE, NONE, NONE]],
  player: 'X',
  winner: NONE,
};

const intents = {
  TAKE_TURN: (model, data) => {
    if (
      model.winner !== NONE ||
      model.gameBoard[data.row][data.square] !== NONE
    )
      return model;

    model.gameBoard[data.row][data.square] = model.player;
    model.player = model.player === 'X' ? 'O' : 'X';
    return model;
  },
  SCORE: model => {
    const primes = mapToPrimes(model.gameBoard);
    const possilbeWins = flatMapPossibleWins(primes);
    const flatPrimes = primes.flatMap(row => row.map(column => column));

    if (possilbeWins.some(r => r === X_WIN_TOTAL)) model.winner = 'X';
    else if (possilbeWins.some(r => r === O_WIN_TOTAL)) model.winner = 'O';
    else if (flatPrimes.every(m => m !== 0)) model.winner = DRAW;

    return model;
  },
};

const update = (model, intent, data) => {
  model = intents[intent](model, data);
};

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
                update(model, 'TAKE_TURN', {
                  row: row_index,
                  square: square_index,
                });
                update(model, 'SCORE');
                render(model);
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
            return <span> It's {model.player}'s turn.</span>;
          case DRAW:
            return <span>DRAW</span>;
          default:
            return <span className="ttt-win">{model.winner} WINS!</span>;
        }
      })()}
    </div>
  </div>
);

function render(model) {
  ReactDOM.render(view(model), document.getElementById('root'));
}

render(model);

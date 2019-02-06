import React from 'react';
import ReactDOM from 'react-dom';
import StateContainer from './StateContainer';
import GameBoard from './GameBoard';
import GameInfo from './GameInfo';
import ResetGame from './ResetGame';
import './index.css';

const view = model => (
  <div>
    <h1>Pirate Tic Tac Toe</h1>
    <GameBoard gameBoard={model.gameBoard} />
    <GameInfo player={model.player} winner={model.winner} />
    {model.winner && <ResetGame />}
  </div>
);

function render() {
  ReactDOM.render(
    view(StateContainer.getState()),
    document.getElementById('root'),
  );
}

StateContainer.subscribe(render);
render();

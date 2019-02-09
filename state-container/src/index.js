import React from 'react';
import ReactDOM from 'react-dom';
import StateContainer from './StateContainer';
import GameBoard from './GameBoard';
import GameInfo from './GameInfo';
import ResetGame from './ResetGame';
import './index.css';

const view = model => (
  <div className="container-fluid">
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Pirate Tic Tac Toe</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-10 offset-1">
        <GameBoard gameBoard={model.gameBoard} />
      </div>
    </div>
    <div className="row">
      <div className="col-10 offset-1">
        <GameInfo player={model.player} winner={model.winner} />
        {model.winner && <ResetGame />}
      </div>
    </div>
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

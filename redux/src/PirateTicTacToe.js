import React from 'react';
import GameBoard from './GameBoard';
import GameInfo from './GameInfo';
import ResetGame from './ResetGame';
import {connect} from 'react-redux';
import resetGame from './actions/ResetGame';
import takeTurn from './actions/TakeTurn';
import GameScore from './GameScore';
import './index.css';

function mapStateToProps(state) {
  return {
    gameBoard: state.gameState.gameBoard,
    player: state.gameState.player,
    winner: state.gameState.winner,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onResetGame: () => dispatch(resetGame()),
    onPlay: (row, square) => dispatch(takeTurn(row, square)),
  };
}

function PirateTicTacToe(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="jumbotron col-10 offset-1">
          <h1>Pirate Tic Tac Toe</h1>
          <hr className="my-4" />
          <p>
            Click on a Tic Tac Toe square to claim it for the current player.
          </p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-5 col-sm-10 offset-md-1 offset-sm-1">
          <GameInfo player={props.player} winner={props.winner} />
          <GameBoard gameBoard={props.gameBoard} onPlay={props.onPlay} />
        </div>
        <div className="col-md-5 col-sm-10 offset-md-0 offset-sm-1 align-items-center text-center">
          <GameScore />
          <ResetGame onResetGame={props.onResetGame} winner={props.winner} />
        </div>
      </div>
    </div>
  );
}

const ConnectedPirateTicTacToe = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PirateTicTacToe);

export default ConnectedPirateTicTacToe;

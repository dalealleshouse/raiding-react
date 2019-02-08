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
    <div>
      <h1>Pirate Tic Tac Toe</h1>
      <GameInfo player={props.player} winner={props.winner} />
      {props.winner && <ResetGame onResetGame={props.onResetGame} />}
      <GameBoard gameBoard={props.gameBoard} onPlay={props.onPlay} />
      <GameScore />
    </div>
  );
}

const ConnectedPirateTicTacToe = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PirateTicTacToe);

export default ConnectedPirateTicTacToe;

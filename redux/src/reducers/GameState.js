import {NONE, score, emptyBoard} from '../helpers';
import {TAKE_TURN, RESET_GAME} from '../actions/ActionTypes';

const defaultState = {gameBoard: emptyBoard, winner: null, player: 'X'};

export default function gameState(state = defaultState, action) {
  switch (action.type) {
    case TAKE_TURN:
      if (state.winner || state.gameBoard[action.row][action.square] !== NONE)
        return state;

      // clone the array so we don't mutate the existing state
      let gameBoard = state.gameBoard.map(r => r.slice(0));
      gameBoard[action.row][action.square] = state.player;

      const player = state.player === 'X' ? 'O' : 'X';
      const winner = score(gameBoard);

      return {...state, player, winner, gameBoard};
    case RESET_GAME:
      return {...state, gameBoard: emptyBoard, winner: null};
    default:
      return state;
  }
}

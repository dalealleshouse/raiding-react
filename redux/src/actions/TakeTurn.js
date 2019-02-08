import {TAKE_TURN} from './ActionTypes';

export default function resetGameActionCreator(row, square) {
  return {
    type: TAKE_TURN,
    row: row,
    square: square,
  };
}


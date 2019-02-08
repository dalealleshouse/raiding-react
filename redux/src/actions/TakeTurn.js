import {TAKE_TURN} from './ActionTypes';

export default function takeTurnActionCreator(row, square) {
  return {
    type: TAKE_TURN,
    row: row,
    square: square,
  };
}


import React from 'react';
import PlayerImage from './PlayerImage';
import StateContainer from './StateContainer';

export default function GameSquare(props) {
  return (
    <div
      className="ttt-square"
      onClick={() => {
        StateContainer.dispatch({
          type: 'PLAY',
          row: props.row,
          square: props.square,
        });
      }}>
      <PlayerImage player={props.player} />
    </div>
  );
}

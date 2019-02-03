import React from 'react';
import PlayerImage from './PlayerImage';
import StateContainer from './StateContainer';

export default function GameSquare(props) {
  return (
    <div
      className="ttt-square"
      onClick={() => {
        StateContainer.dispatch('PLAY', {
          row: props.row,
          square: props.square,
        });
        StateContainer.dispatch('SCORE');
      }}>
      <PlayerImage player={props.player} />
    </div>
  );
}

import React from 'react';
import PlayerImage from './PlayerImage';

export default function GameSquare(props) {
  return (
    <div
      className="ttt-square"
      onClick={() => props.onPlay(props.row, props.square)}>
      <PlayerImage player={props.player} />
    </div>
  );
}

import React from 'react';
import PlayerImage from './PlayerImage';
import './index.css';
import {DRAW} from './helpers';

export default function GameInfo({player, winner}) {
  return (
    <div className="ttt-info">
      {(() => {
        switch (winner) {
          case null:
            return (
              <span>
                It's <PlayerImage player={player} />
                's turn
              </span>
            );
          case DRAW:
            return <span>DRAW</span>;
          default:
            return (
              <span className="ttt-win">
                <PlayerImage player={winner} /> WINS!
              </span>
            );
        }
      })()}
    </div>
  );
}

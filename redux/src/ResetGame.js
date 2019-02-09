import React from 'react';

export default function ResetGame({onResetGame, winner}) {
  return (
    <div className="ttt-reset-game">
      {winner && (
        <button className="btn btn-lg btn-primary m-3" onClick={onResetGame}>
          New Game
        </button>
      )}
    </div>
  );
}

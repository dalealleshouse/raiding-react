import React from 'react';

export default function ResetGame({onResetGame}) {
  return (
    <div className="ttt-new-game">
      <button onClick={onResetGame}>New Game</button>
    </div>
  );
}

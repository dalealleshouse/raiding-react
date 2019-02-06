import React from 'react';
import StateContainer from './StateContainer';

export default function ResetGame() {
  return (
    <div className="ttt-new-game">
      <button onClick={() => StateContainer.dispatch({type: 'RESET_GAME'})}>
        New Game
      </button>
    </div>
  );
}

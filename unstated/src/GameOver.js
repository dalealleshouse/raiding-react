import React from 'react';
import {Subscribe} from 'unstated';
import StateContainer from './StateContainer';

function getMessage(gameState) {
  switch (gameState) {
    case 'won':
      return "Alright then ye Landlubber, You're Saved from the Plank. This Time...";
    case 'lost':
      return 'Arrrr Matey, Enjoy Yer Swim!';
    default:
      return '';
  }
}

function getCssClass(gameState) {
  switch (gameState) {
    case 'won':
      return 'text-success';
    case 'lost':
      return 'text-danger';
    default:
      return '';
  }
}

export default function(props) {
  return (
    <Subscribe to={[StateContainer]}>
      {container => (
        <div className={`text-center ${props.className}`}>
          <h1>{container.state.phrase}</h1>
          <h1 className={getCssClass(container.state.gameState)}>
            {getMessage(container.state.gameState)}
          </h1>
          <button
            className="btn btn-primary"
            onClick={() => container.newGame()}>
            New Game
          </button>
        </div>
      )}
    </Subscribe>
  );
}

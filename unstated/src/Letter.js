import React from 'react';
import {Subscribe} from 'unstated';
import StateContainer from './StateContainer';

function displayLetter(letter, chosen) {
  if (letter === ' ' || chosen.includes(letter)) return letter;

  return '_';
}

export default function(props) {
  return (
    <Subscribe to={[StateContainer]}>
      {container => (
        <span className="m-1">
          {displayLetter(props.letter, container.state.chosenLetters)}
        </span>
      )}
    </Subscribe>
  );
}

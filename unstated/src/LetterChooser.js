import React from 'react';
import {Subscribe} from 'unstated';
import StateContainer from './StateContainer';

function alreadyChosen(letter, chosen) {
  return chosen.includes(letter) ? true : false;
}

export default function(props) {
  return (
    <Subscribe to={[StateContainer]}>
      {container => (
        <button
          className="btn btn-primary btn-sm m-1"
          disabled={alreadyChosen(props.letter, container.state.chosenLetters)}
          onClick={() => container.chooseLetter(props.letter)}>
          {props.letter}
        </button>
      )}
    </Subscribe>
  );
}

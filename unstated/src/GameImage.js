import React from 'react';
import {Subscribe} from 'unstated';
import StateContainer from './StateContainer';
import newGame from './images/new-game.png';
import _1wrong from './images/1-wrong.png';
import _2wrong from './images/2-wrong.png';
import _3wrong from './images/3-wrong.png';
import _4wrong from './images/4-wrong.png';
import _5wrong from './images/5-wrong.png';
import lost from './images/lost.png';

function getImage(numWrong) {
  switch (numWrong) {
    case 0:
      return newGame;
    case 1:
      return _1wrong;
    case 2:
      return _2wrong;
    case 3:
      return _3wrong;
    case 4:
      return _4wrong;
    case 5:
      return _5wrong;
    default:
      return lost;
  }
}

export default function(props) {
  return (
    <Subscribe to={[StateContainer]}>
      {container => (
        <div className={props.className}>
          <img
            src={getImage(container.state.numWrong)}
            alt="[GAME ILLISTRATION]"
            className="rounded img-fluid"
          />
        </div>
      )}
    </Subscribe>
  );
}

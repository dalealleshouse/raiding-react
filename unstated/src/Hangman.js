import React from 'react';
import {Subscribe} from 'unstated';
import Letter from './Letter';
import LetterChooser from './LetterChooser';
import StateContainer from './StateContainer';
import GameOver from './GameOver';

const letters = Array(26)
  .fill()
  .map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i));

export default function(props) {
  return (
    <Subscribe to={[StateContainer]}>
      {container => {
        if (container.state.gameState === 'play')
          return (
            <div className={props.className}>
              <h1 className="text-center font-weight-bold m-3">
                {container.state.phrase.split('').map((l, i) => (
                  <Letter key={i} letter={l} />
                ))}
              </h1>
              <div className="text-center">
                {letters.map((l, i) => (
                  <LetterChooser key={i} letter={l} />
                ))}
              </div>
            </div>
          );
        else return <GameOver className={props.className} />;
      }}
    </Subscribe>
  );
}

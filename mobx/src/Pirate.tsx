import React from 'react';
import {GameVar} from './algebraPuzzle';
import A from './pirates/A.PNG';
import B from './pirates/B.PNG';
import C from './pirates/C.PNG';
import D from './pirates/D.PNG';
import E from './pirates/E.PNG';
import F from './pirates/F.PNG';

interface PirateProps {
  variable: GameVar;
}

function getImage(variable: GameVar) {
  switch (variable) {
    case 'A':
      return A;
    case 'B':
      return B;
    case 'C':
      return C;
    case 'D':
      return D;
    case 'E':
      return E;
    default:
      return F;
  }
}

const Pirate: React.FC<PirateProps> = props => {
  return (
    <div className="game-square pirate">
      <img src={getImage(props.variable)} alt={props.variable} />
    </div>
  );
};

export default Pirate;

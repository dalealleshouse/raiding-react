import React from 'react';
import booty from './pirates/booty.PNG';

interface SumProps {
  sum: number;
}

const Sum: React.FC<SumProps> = props => {
  return props.sum > 0 ? (
    <div className="game-square sum">
      <img src={booty} />
      <div className="text">{props.sum}</div>
    </div>
  ) : (
    <div className="game-square sum"> </div>
  );
};

export default Sum;

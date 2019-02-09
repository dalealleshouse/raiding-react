import React from 'react';
import xxx from './images/xxx.png';
import ohh from './images/ohh.png';

export default function PlayerImage({player}) {
  if (player === 'X') return <img src={xxx} alt="X" />;
  else if (player === 'O') return <img src={ohh} alt="O" />;
  else return '-';
}

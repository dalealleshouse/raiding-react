import React from 'react';

export default function PlayerImage({player}) {
  if (player === 'X') return <img src="xxx.png" alt="X" />;
  else if (player === 'O') return <img src="ohh.png" alt="X" />;
  else return '-';
}

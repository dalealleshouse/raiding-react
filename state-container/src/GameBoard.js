import React from 'react';
import GameSquare from './GameSquare';

export default function GameBoard({gameBoard}) {
  return (
    <div className="ttt-board">
      {gameBoard.map((row, row_index) => (
        <div key={row_index} className="ttt-row">
          {row.map((square, square_index) => (
            <GameSquare
              key={`${row_index}-${square_index}`}
              row={row_index}
              square={square_index}
              player={gameBoard[row_index][square_index]}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

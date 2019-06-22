import React from 'react';
import appState from './appState';
import Pirate from './Pirate';
import Sum from './Sum';

const GameBoard: React.FC = () => {
  return (
    <div className="game-board">
      {appState.puzzle.gameBoard.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((item, columnIndex) => (
            <Pirate key={`${rowIndex}-{${columnIndex}`} variable={item} />
          ))}
          <Sum sum={appState.puzzle.sums.rows[rowIndex] as number} />
        </div>
      ))}
      <div>
        {appState.puzzle.sums.columns.map((sum, index) => (
          <Sum key={index} sum={sum as number} />
        ))}
        <Sum sum={0} />
      </div>
    </div>
  );
};

export default GameBoard;

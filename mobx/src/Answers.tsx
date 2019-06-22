import React from 'react';
import appState from './appState';
import Pirate from './Pirate';
import {GameVar} from './algebraPuzzle';

const Answers: React.FC = () => {
  return (
    <div className="answer-board">
      <div>
        {Object.keys(appState.puzzle.answers).map(key => (
          <Pirate variable={key as GameVar} />
        ))}
      </div>
      {Object.keys(appState.puzzle.answers).map(key => (
        <span className="game-square">
          <input type="text"></input>
        </span>
      ))}
      <div></div>
      <div>
        <button className="btn btn-primary">Check Answers</button>
      </div>
    </div>
  );
};

export default Answers;

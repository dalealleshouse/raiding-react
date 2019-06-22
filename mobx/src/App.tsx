import React from 'react';
import './App.css';
import GameBoard from './GameBoard';
import AnswerBoard from './AnswerBoard';
import GameSizeSelector from './GameSizeSelector';

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="jumbotron col-10 offset-1">
          <h1>Divide the Booty</h1>
          <hr className="my-4" />
          <p>
            Help the pirates divide up their plundered doubloons. Each row and
            column displays the sum of doubloons. Use algebraic reasoning to
            determine the exact number of doubloons each pirate gets.
          </p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-11 offset-1 align-items-center text-center">
          <GameSizeSelector />
          <GameBoard />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-11 offset-1 align-items-center text-center">
          <AnswerBoard />
        </div>
      </div>
    </div>
  );
};

export default App;

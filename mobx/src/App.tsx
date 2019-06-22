import React from 'react';
import './App.css';
import algebraPuzzle, {GameSize} from './algebraPuzzle';
import appState from './appState';
import Pirate from './Pirate';
import Sum from './Sum';
import GameBoard from './GameBoard';
import Answers from './Answers';

function updatePirates(event: React.FormEvent<HTMLSelectElement>) {
  appState.setNumberOfPirates(parseInt(event.currentTarget.value) as GameSize);
  console.log(appState.puzzle.gameBoard);
}

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
          <label htmlFor="numberOfPiratesDropDown" className="mr-3">
            Number of Pirates
          </label>
          <select id="numberOfPiratesDropDown" onChange={updatePirates}>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <GameBoard />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-11 offset-1 align-items-center text-center">
          <Answers />
        </div>
      </div>
    </div>
  );
};

export default App;

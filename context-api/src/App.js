import React from 'react';
import AppProvider from './AppProvider';
import GameBoard from './GameBoard';
import Score from './Score';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      correct: 0,
      incorrect: 0,
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="jumbotron col-10 offset-1">
            <h1>Name That Pirate</h1>
          </div>
        </div>
        <AppProvider>
          <GameBoard />
          <Score />
        </AppProvider>
      </div>
    );
  }
}

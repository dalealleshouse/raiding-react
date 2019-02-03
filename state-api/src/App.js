import React from 'react';
import GameBoard from './GameBoard';
import Score from './Score';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      correct: 0,
      incorrect: 0,
    };

    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
    this.handleIncorrectAnswer = this.handleIncorrectAnswer.bind(this);
  }

  handleCorrectAnswer() {
    this.setState({
      correct: this.state.correct + 1,
    });
  }

  handleIncorrectAnswer() {
    this.setState({
      incorrect: this.state.incorrect + 1,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="jumbotron col-10 offset-1">
            <h1>Name That Pirate</h1>
          </div>
        </div>
        <GameBoard
          onCorrectAnswer={this.handleCorrectAnswer}
          onIncorrectAnswer={this.handleIncorrectAnswer}
        />
        <Score correct={this.state.correct} incorrect={this.state.incorrect} />
      </div>
    );
  }
}

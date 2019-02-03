import React from 'react';
import pirateData from './pirates.json';
import PirateImage from './PirateImage';
import {shuffle, sample, cloneDeep} from 'lodash';
import Answer from './Answer';
import PropTypes from 'prop-types';

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.buildTurnData = this.buildTurnData.bind(this);
    this.nextTurn = this.nextTurn.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);

    this.state = {
      pirates: pirateData,
      turn: this.buildTurnData(pirateData),
    };
  }

  buildTurnData(pirates) {
    const possiblities = cloneDeep(shuffle(pirates).slice(0, 4));
    const pirate = sample(possiblities);
    return {
      possiblities,
      pirate,
    };
  }

  nextTurn() {}

  handleAnswerSelected(pirate) {
    if (pirate.name === this.state.turn.pirate.name) {
      this.setState({
        turn: this.buildTurnData(this.state.pirates),
      });
      this.props.onCorrectAnswer();
    } else {
      let turn = this.state.turn;
      turn.possiblities.find(p => p.name === pirate.name).disabled = true;
      this.setState({
        turn: turn,
      });
      this.props.onIncorrectAnswer();
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-4 offset-1 center text-center">
          <PirateImage pirate={this.state.turn.pirate} />
        </div>
        <div className="col-6">
          {this.state.turn.possiblities.map(p => (
            <Answer
              key={p.name}
              pirate={p}
              onSelected={this.handleAnswerSelected}
              disabled={p.disabled}
            />
          ))}
        </div>
      </div>
    );
  }
}

GameBoard.propTypes = {
  onCorrectAnswer: PropTypes.func.isRequired,
  onIncorrectAnswer: PropTypes.func.isRequired,
};

import React from 'react';
import pirateData from './pirates.json';
import PirateImage from './PirateImage';
import {shuffle, sample, cloneDeep} from 'lodash';
import Answer from './Answer';
import {AppContext} from './AppProvider';

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.buildTurnData = this.buildTurnData.bind(this);
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

  handleAnswerSelected(pirate, context) {
    if (pirate.name === this.state.turn.pirate.name) {
      this.setState({
        turn: this.buildTurnData(this.state.pirates),
      });
      context.incCorrect();
    } else {
      let turn = this.state.turn;
      turn.possiblities.find(p => p.name === pirate.name).disabled = true;
      this.setState({
        turn: turn,
      });
      context.incIncorrect();
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-4 offset-1 center text-center">
          <PirateImage pirate={this.state.turn.pirate} />
        </div>
        <div className="col-6">
          <AppContext.Consumer>
            {context => {
              return this.state.turn.possiblities.map(p => (
                <Answer
                  key={p.name}
                  pirate={p}
                  disabled={p.disabled}
                  onSelected={p => this.handleAnswerSelected(p, context)}
                />
              ));
            }}
          </AppContext.Consumer>
        </div>
      </div>
    );
  }
}

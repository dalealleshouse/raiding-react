import React from 'react';
import PlayerImage from './PlayerImage';
import {connect} from 'react-redux';

function GameScore(props) {
  return (
    <div className="ttt-running-score">
      <h3>Running Score:</h3>
      <span className="p-3">
        <PlayerImage player="X" /> {props.xWins}
        <PlayerImage player="O" /> {props.oWins}
      </span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    xWins: state.gameState.xWins,
    oWins: state.gameState.oWins,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedGameScore = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameScore);

export default ConnectedGameScore;

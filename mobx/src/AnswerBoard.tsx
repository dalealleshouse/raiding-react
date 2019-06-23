import React from 'react';
import Pirate from './Pirate';
import {AppStoreProps, PuzzleState} from './AppStore';
import {inject, observer} from 'mobx-react';
import {GameVar} from './algebraPuzzle';

@inject('store')
@observer
export default class AnswerBoard extends React.Component<AppStoreProps> {
  render() {
    const store = this.props.store!;
    const puzzle = store.puzzle;
    return (
      <div className="answer-board">
        <div>
          {Object.keys(puzzle.answers).map(key => (
            <Pirate variable={key as GameVar} key={key} />
          ))}
        </div>
        {Object.keys(puzzle.answers).map(key => (
          <span className="game-square" key={key}>
            <input
              type="number"
              value={store.getPlayerAnswer(key as GameVar)}
              disabled={store.puzzleState === PuzzleState.SOLVED}
              onChange={event =>
                store.setPlayerAnswer(
                  key as GameVar,
                  event.currentTarget.valueAsNumber,
                )
              }></input>
          </span>
        ))}
        {store.puzzleState !== PuzzleState.SOLVED && (
          <div>
            <button className="btn btn-primary" onClick={store.checkAnswers}>
              Check Answers
            </button>
          </div>
        )}
        {store.puzzleState === PuzzleState.INCORRECT_ANSWERS && (
          <div className="h1 text-danger">
            Hornswaggle, says I! Try again landlubber.
          </div>
        )}
        {store.puzzleState === PuzzleState.SOLVED && (
          <div className="h1 text-success">
            Yo Ho Ho! This division of booty be acceptable.
          </div>
        )}
      </div>
    );
  }
}

import React from 'react';
import Pirate from './Pirate';
import Sum from './Sum';
import {AppStoreProps} from './AppStore';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
export default class GameBoard extends React.Component<AppStoreProps> {
  render() {
    const puzzle = this.props.store!.puzzle;

    return (
      <div className="game-board">
        {puzzle.gameBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="game-row">
            {row.map((item, columnIndex) => (
              <Pirate key={`${rowIndex}-{${columnIndex}`} variable={item} />
            ))}
            <Sum sum={puzzle.sums.rows[rowIndex] as number} />
          </div>
        ))}
        <div className="game-row">
          {puzzle.sums.columns.map((sum, index) => (
            <Sum key={index} sum={sum as number} />
          ))}
          <Sum sum={0} />
        </div>
      </div>
    );
  }
}

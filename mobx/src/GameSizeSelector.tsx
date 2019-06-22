import React from 'react';
import {GameSize} from './algebraPuzzle';
import {AppStoreProps} from './AppStore';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
export default class GameSizeSelector extends React.Component<AppStoreProps> {
  constructor(props: any) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.store!.setNumberOfPirates(parseInt(
      event.currentTarget.value,
    ) as GameSize);
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor="numberOfPiratesDropDown" className="mr-3">
          Number of Pirates
        </label>
        <select
          id="numberOfPiratesDropDown"
          value={this.props.store!.numberOfPirates}
          onChange={this.handleOnChange}>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </React.Fragment>
    );
  }
}

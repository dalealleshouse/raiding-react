import {observable, action} from 'mobx';
import algebraPuzzle, {GameSize, AlgebraPuzzle} from './algebraPuzzle';

class DivideTheBootyState {
  @observable
  numberOfPirates: GameSize = 3;

  @observable.shallow
  puzzle: AlgebraPuzzle = algebraPuzzle(this.numberOfPirates);

  @action
  setNumberOfPirates(num: GameSize) {
    this.numberOfPirates = num;
    this.puzzle = algebraPuzzle(this.numberOfPirates);
  }

  @action
  newPuzzle() {
    this.puzzle = algebraPuzzle(this.numberOfPirates);
  }
}

const appState = new DivideTheBootyState();
export default appState;

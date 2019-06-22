import {observable, action} from 'mobx';
import algebraPuzzle, {
  GameSize,
  AlgebraPuzzle,
  GameVarMap,
  GameVar,
} from './algebraPuzzle';

export enum PuzzleState {
  FRESH,
  INCORRECT_ANSWERS,
  SOLVED,
}

export class AppStore {
  constructor() {
    this.getPlayerAnswer = this.getPlayerAnswer.bind(this);
    this.setPlayerAnswer = this.setPlayerAnswer.bind(this);
  }

  @observable
  numberOfPirates: GameSize = 3;

  @observable.shallow
  puzzle: AlgebraPuzzle = algebraPuzzle(this.numberOfPirates);

  @observable
  playerAnswers: GameVarMap = {};

  @observable
  puzzleState: PuzzleState = PuzzleState.FRESH;

  setPlayerAnswer(gameVar: GameVar, value: number) {
    this.playerAnswers[gameVar] = value;
  }

  getPlayerAnswer(gameVar: GameVar): string {
    const val = this.playerAnswers[gameVar];
    return val ? val.toString() : '';
  }

  @action.bound
  checkAnswers(): void {
    this.puzzleState = Object.keys(this.puzzle.answers).every(
      key => this.puzzle.answers[key] === this.playerAnswers[key],
    )
      ? PuzzleState.SOLVED
      : PuzzleState.INCORRECT_ANSWERS;
  }

  @action.bound
  setNumberOfPirates(num: GameSize) {
    this.numberOfPirates = num;
    this.puzzle = algebraPuzzle(this.numberOfPirates);
    this.puzzleState = PuzzleState.FRESH;
    this.playerAnswers = {};
  }
}

export interface AppStoreProps {
  store?: AppStore;
}

const appStore = new AppStore();
export default appStore;

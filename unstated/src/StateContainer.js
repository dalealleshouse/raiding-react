import {Container} from 'unstated';
import {sample} from 'lodash';

const phrases = [
  'AHOY MATEY',
  'PLANK',
  'SWASHBUCKLER',
  'CANNON',
  'AVAST YE',
  'TREASURE',
  'CAPTAIN',
  'BLOW THE MAN DOWN',
  'DOUBLOON',
  'DAVY JONES LOCKER',
  'JOLLY ROGER',
  'GANGPLANK',
  'LANDLUBBER',
  'MARAUDER',
  'RUM',
];

const defaultState = {
  phrase: sample(phrases),
  chosenLetters: [],
  numWrong: 0,
  gameState: 'play',
};

export default class StateContainer extends Container {
  state = {...defaultState};

  chooseLetter(letter) {
    const phraseChars = this.state.phrase.split('').filter(c => c !== ' ');
    const chosen = [...this.state.chosenLetters, letter];

    let numWrong = phraseChars.includes(letter)
      ? this.state.numWrong
      : this.state.numWrong + 1;

    let intersection = phraseChars.filter(c => chosen.includes(c));

    let gameState = this.state.gameState;
    if (intersection.length === phraseChars.length) gameState = 'won';
    else if (numWrong > 5) gameState = 'lost';

    this.setState({
      chosenLetters: [...this.state.chosenLetters, letter],
      numWrong,
      gameState,
    });
  }

  newGame() {
    this.setState({...defaultState, phrase: sample(phrases)});
  }
}

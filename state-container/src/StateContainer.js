import './index.css';
import {score, NONE, emptyBoard} from './helpers';
import {createStore} from './Store';

const intents = {
  PLAY: (model, intent) => {
    if (model.winner || model.gameBoard[intent.row][intent.square] !== NONE)
      return model;

    // clone the array so we don't mutate the existing state
    let gameBoard = model.gameBoard.map(r => r.slice(0));
    gameBoard[intent.row][intent.square] = model.player;

    const player = model.player === 'X' ? 'O' : 'X';
    const winner = score(gameBoard);

    return {...model, player, winner, gameBoard};
  },
  RESET_GAME: (model, intent) => {
    return {...model, gameBoard: emptyBoard, winner: null};
  },
};

const update = (model, intent) => {
  let action = intents[intent.type];
  if (!action) return model;

  return action(model, intent);
};

const defaultState = {gameBoard: emptyBoard, player: 'X', winner: null};
var container = createStore(update, defaultState);

export default container;

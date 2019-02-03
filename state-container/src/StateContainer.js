import './index.css';
import {score, NONE, emptyBoard} from './helpers';
import createStore from './Store';

const defaultState = {gameBoard: emptyBoard, player: 'X', winner: null};

const intents = {
  PLAY: (model, data) => {
    if (model.winner || model.gameBoard[data.row][data.square] !== NONE)
      return model;

    model.gameBoard[data.row][data.square] = model.player;
    model.player = model.player === 'X' ? 'O' : 'X';
    return model;
  },
  SCORE: model => {
    model.winner = score(model.gameBoard);
    return model;
  },
};

const update = (model = defaultState, intent, data) => {
  return intents[intent](model, data);
};

var container = createStore(update);

export default container;

import deepFreeze, {DeepReadonly} from 'deep-freeze';

const CHAR_CODE_A = 65;
export type GameVar = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
export type GameSize = 3 | 4 | 5 | 6;
type GameVarMap = {[key: string]: number};
type GameBoard = Array<Array<GameVar>>;

type RowColumnSums = {
  rows: Array<Number>;
  columns: Array<Number>;
};

export type AlgebraPuzzle = DeepReadonly<{
  answers: GameVarMap;
  gameBoard: GameBoard;
  sums: RowColumnSums;
}>;

function randomIntFromInterval(min = 1, max = 100): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomCharFromInterval(min: GameVar, max: GameVar): GameVar {
  const intMin = min.charCodeAt(0);
  const intMax = max.charCodeAt(0);

  const rand = randomIntFromInterval(intMin, intMax);
  return String.fromCharCode(rand) as GameVar;
}

function generateRandomVariables(size: GameSize): GameVarMap {
  return Array.from(Array(size).keys()).reduce(
    (acc, curr) => {
      acc[String.fromCharCode(CHAR_CODE_A + curr)] = randomIntFromInterval();
      return acc;
    },
    {} as GameVarMap,
  );
}

export default function buildAlgebraPuzzle(gridSize: GameSize): AlgebraPuzzle {
  const maxChar = String.fromCharCode(CHAR_CODE_A + gridSize - 1) as GameVar;
  const gridTemplate = Array.from(Array(gridSize).keys()) as Array<number>;

  const variables: GameVarMap = generateRandomVariables(gridSize);

  const gameBoard: GameBoard = gridTemplate.map(() =>
    gridTemplate.map(() => randomCharFromInterval('A', maxChar)),
  );

  const sums: RowColumnSums = {
    rows: gameBoard.map(row =>
      row.reduce((acc, curr) => acc + variables[curr], 0),
    ),
    columns: gridTemplate.map(ci => {
      return gridTemplate.reduce((acc, ri) => {
        return variables[gameBoard[ri][ci]] + acc;
      }, 0);
    }),
  };

  return deepFreeze({
    answers: variables,
    gameBoard: gameBoard,
    sums: sums,
  });
}

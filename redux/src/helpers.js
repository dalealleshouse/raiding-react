export const NONE = '-';
export const DRAW = 'D';
export const emptyBoard = [
  [NONE, NONE, NONE],
  [NONE, NONE, NONE],
  [NONE, NONE, NONE],
];

const turnValuePrimes = {
  [NONE]: 0,
  X: 3,
  O: 7,
};

const X_WIN_TOTAL = turnValuePrimes.X * 3;
const O_WIN_TOTAL = turnValuePrimes.O * 3;

const mapToPrimes = gameBoard =>
  gameBoard.map(r => r.map(s => turnValuePrimes[s]));

const flatMapPossibleWins = primes => {
  // row sums
  let sums = primes.map(r => r.reduce((total, current) => total + current));

  // column sums
  sums = sums.concat(
    primes.map((row, col_index) =>
      row.reduce(
        (total, current, row_index) => total + primes[row_index][col_index],
        0,
      ),
    ),
  );

  // diagonal sums
  sums = sums.concat([
    primes[0][0] + primes[1][1] + primes[2][2],
    primes[0][2] + primes[1][1] + primes[2][0],
  ]);

  return sums;
};

export function score(gameBoard) {
  const primes = mapToPrimes(gameBoard);
  const flatPrimes = primes.flatMap(row => row.map(column => column));
  const possilbeWins = flatMapPossibleWins(primes);

  if (possilbeWins.some(r => r === X_WIN_TOTAL)) return 'X';
  else if (possilbeWins.some(r => r === O_WIN_TOTAL)) return 'O';
  else if (flatPrimes.every(m => m !== 0)) return DRAW;
  else return null;
}

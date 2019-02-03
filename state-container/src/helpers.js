// Constants
export const NONE = '-';
export const DRAW = 'D';
export const turnValuePrimes = {
  [NONE]: 0,
  X: 3,
  O: 7,
};

export const X_WIN_TOTAL = turnValuePrimes.X * 3;
export const O_WIN_TOTAL = turnValuePrimes.O * 3;

// Helper Functions*************************************************************
export const mapToPrimes = gameBoard =>
  gameBoard.map(r => r.map(s => turnValuePrimes[s]));

export const flatMapPossibleWins = primes => {
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

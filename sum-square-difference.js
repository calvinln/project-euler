let sumOfSquares = 0;
let squareOfSum = 0;

for (let i = 1; i <= 100; i++) {
  sumOfSquares += i * i;
  squareOfSum += i;
}

console.log(Math.abs(sumOfSquares - squareOfSum * squareOfSum));

// https://projecteuler.net/problem=2

let previous = 1;
let current = 2;
let sum = 0;

while (current < 4000000) {
  if (current % 2 === 0) {
    sum += current;
  }
  let temp = current;
  let next = current + previous;
  previous = temp;
  current = next;
}

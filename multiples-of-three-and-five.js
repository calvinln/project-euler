// https://projecteuler.net/problem=1

for (let i = 0; i < 1000; i++) {
  if (i % 5 === 0) {
    sum += i;
  } else if (i % 3 === 0) {
    sum += i;
  }
}

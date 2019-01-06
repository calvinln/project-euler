let primes = [];
let isPrime = true;
let i = 2;

while (primes.length < 10001) {
  for (let j = 0; j < primes.length; j++) {
    if (i % primes[j] === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    primes.push(i);
  }
  i++;
  isPrime = true;
}

console.log(primes[10000]);

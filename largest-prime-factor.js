// https://projecteuler.net/problem=3

let primeNums = [];
let sqrtNum = Math.sqrt(600851475143);
let targetNum = 600851475143;

for (let i = 2; i < sqrtNum; i++) {
  let isPrime = true;
  for (let j = 0; j < primeNums.length; j++) {
    if (i % primeNums[j] === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primeNums.push(i);
  }
}

let primesLength = primeNums.length;
for (let backIndex = primesLength - 1; backIndex >= 0; backIndex--) {
  if (targetNum % primeNums[backIndex] === 0) {
    console.log(primeNums[backIndex]);
    break;
  }
}

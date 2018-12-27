let num = 2520;

while (true) {
  let isEvenlyDivisible = true;
  for (let i = 2; i <= 20; i++) {
    if (num % i !== 0) {
      isEvenlyDivisible = false;
      break;
    }
  }
  if (isEvenlyDivisible) {
    console.log(num);
    return;
  }
  num += 20;
}

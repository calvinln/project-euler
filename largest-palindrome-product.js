let largest = 0;
let isPalindrome = true;

for (let i = 100; i < 1000; i++) {
  for (let j = 100; j < 1000; j++) {
    let product = i * j;
    let numStr = product.toString();
    let arr = numStr.split('');
    let backIndex = arr.length - 1;
    for (let k = 0; k < arr.length / 2; k++) {
      if (arr[k] !== arr[backIndex]) {
        isPalindrome = false;
      }
      backIndex -= 1;
    }
    if (isPalindrome) {
      if (product > largest) {
        largest = product;
      }
    }
    isPalindrome = true;
  }
}

console.log(largest);

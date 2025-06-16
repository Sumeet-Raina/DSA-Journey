function palindromeNumber(number) {
  if (number < 0) return false;
  let original = number; // Store original value
  let reverse = 0;

  while (number > 0) {
    let remainder = number % 10;
    reverse = 10 * reverse + remainder;
    number = Math.floor(number / 10);
  }

  return reverse === original;
}
console.log(palindromeNumber(123));
console.log(palindromeNumber(121));
console.log(palindromeNumber(-121));

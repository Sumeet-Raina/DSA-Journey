function countDigits(number) {
  if (number === 0) return 1; //edgecase
  let count = 0;

  //handeling negative numbers by converting them to positive number
  number = Math.abs(number);
  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }

  return count;
}

console.log(countDigits(0));
console.log(countDigits(1));
console.log(countDigits(239));
console.log(countDigits(-1));
console.log(countDigits(-78178));
console.log(countDigits(239454646664));

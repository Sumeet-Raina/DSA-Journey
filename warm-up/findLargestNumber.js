function findLargestNumber(arr) {
  const numbersOnly = arr.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numbersOnly.length === 0) {
    return undefined;
  }

  const array = [...numbersOnly];
  let largestNum = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNum) {
      largestNum = array[i];
    }
  }
  return largestNum;
}
console.log(findLargestNumber([])); // undefined
console.log(findLargestNumber([10, 2, -5, 7, 0])); // 10
console.log(findLargestNumber([3, 1, 4, 2])); // 4
console.log(findLargestNumber([-10, -20, -5])); // -5
console.log(findLargestNumber([0, 5, 10, 15])); // 15
console.log(findLargestNumber([100])); // 100
console.log(findLargestNumber([])); // undefined (empty array)
console.log(findLargestNumber([0, 0, 0, 0])); // 0 (all same)
console.log(findLargestNumber([-1, -1, -1])); // -1
console.log(findLargestNumber([999, -999, 0, 500])); // 999
console.log(findLargestNumber([-5, 0, -10, 3])); // 3
console.log(findLargestNumber([Infinity, -Infinity])); // Infinity
console.log(findLargestNumber([NaN, 1, 2])); // 2 (NaN is ignored)
console.log(findLargestNumber(["a", 1, 2])); // 2 (if non-numeric filtered)
console.log(findLargestNumber([true, false, 0, -1])); // 1 (true is coerced to 1)
console.log(findLargestNumber([NaN, NaN])); // NaN or undefined based on handling
console.log(findLargestNumber([Number.MAX_VALUE, -1])); // Number.MAX_VALUE

function findSmallestNumber(arr) {
  const numbersOnly = arr.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numbersOnly.length === 0) {
    return undefined;
  }

  const array = [...numbersOnly];
  let smallestNum = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestNum) {
      smallestNum = array[i];
    }
  }
  return smallestNum;
}

console.log(findSmallestNumber([])); // undefined
console.log(findSmallestNumber([10, 2, -5, 7, 0])); // -5
console.log(findSmallestNumber([3, 1, 4, 2])); // 1
console.log(findSmallestNumber([-10, -20, -5])); // -20
console.log(findSmallestNumber([0, 5, 10, 15])); // 0
console.log(findSmallestNumber([100])); // 100
console.log(findSmallestNumber([])); // undefined (empty array)
console.log(findSmallestNumber([0, 0, 0, 0])); // 0 (all same)
console.log(findSmallestNumber([-1, -1, -1])); // -1
console.log(findSmallestNumber([999, -999, 0, 500])); // -999
console.log(findSmallestNumber([-5, 0, -10, 3])); // -10
console.log(findSmallestNumber([Number.MAX_VALUE, -1])); // -1
console.log(findSmallestNumber([Infinity, -Infinity])); // -Infinity
console.log(findSmallestNumber([NaN, 1, 2])); // 1 (NaN is ignored in comparison)
console.log(findSmallestNumber([NaN, NaN])); // NaN
console.log(findSmallestNumber(["a", 1, 2])); // May return 1 or throw depending on implementation
console.log(findSmallestNumber([true, false, 0, -1])); // Might return -1

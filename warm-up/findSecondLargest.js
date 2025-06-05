function findSecondLargest(arr) {
  const numbersOnly = arr.filter(
    (number) => typeof number === "number" && !isNaN(number)
  );

  if (numbersOnly.length < 2) {
    return undefined;
  }

  const array = [...numbersOnly];
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = array[i];
    } else if (array[i] > secondLargest && array[i] !== firstLargest) {
      secondLargest = array[i];
    }
  }
  return secondLargest === -Infinity || secondLargest === Infinity
    ? undefined
    : secondLargest;
}

// ✅ Basic Cases
console.log(findSecondLargest([10, 2, -5, 7, 20, 15])); // 15
console.log(findSecondLargest([5, 4, 3, 2, 1])); // 4
console.log(findSecondLargest([1, 2, 3, 4, 5])); // 4
console.log(findSecondLargest([100, 99])); // 99

// ❌ Edge Cases
console.log(findSecondLargest([])); // undefined - empty array
console.log(findSecondLargest([42])); // undefined - only one number
console.log(findSecondLargest([7, 7, 7, 7])); // undefined - no second unique

// 🔁 Duplicates with valid second
console.log(findSecondLargest([10, 10, 5, 3])); // 5
console.log(findSecondLargest([8, 8, 8, 6, 6])); // 6
console.log(findSecondLargest([1, 1, 2, 2, 3, 3])); // 2

// 🔢 Special Numbers
console.log(findSecondLargest([Number.MAX_VALUE, -1])); // -1
console.log(findSecondLargest([Infinity, 1000, 999])); // 1000
console.log(findSecondLargest([Infinity, Infinity])); // undefined
console.log(findSecondLargest([-Infinity, -200, -300])); // -300

// ➖ All Negative
console.log(findSecondLargest([-5, -10, -1, -20])); // -5
console.log(findSecondLargest([-1, -1, -1])); // undefined

// 🚀 Large Dataset
console.log(findSecondLargest([...Array(100000).keys()])); // 99998

// 🧪 Mixed Non-numeric
console.log(findSecondLargest(["a", 10, 20])); // 10
console.log(findSecondLargest([NaN, 100, 101])); // 100
console.log(findSecondLargest(["5", "6", 3, 2])); // 2 (strings filtered)
console.log(findSecondLargest([true, false, 1, 0])); // 0 (non-numbers filtered)

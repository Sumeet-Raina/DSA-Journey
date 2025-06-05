//Count the negative numbers in an array

function countNegatives(arr) {
  const array = [...arr];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (array[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countNegatives([-1, -2, -3, 5, 5, -5]));

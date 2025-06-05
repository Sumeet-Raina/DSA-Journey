//Write a function that searches for an element in an array and  returns index of that element , if element is not present returns -1

const array = [15, 40, 69, 12, 89, 45, 11, 3, 6, 7];

function searchElement(arr, num) {
  const data = [...arr];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      return i;
    }
  }
  return -1;
}
console.log(searchElement(array, 11));
console.log(searchElement(array, 15));
console.log(searchElement(array, 40));
console.log(searchElement(array, 4));

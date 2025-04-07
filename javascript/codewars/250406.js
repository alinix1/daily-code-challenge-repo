// In this Kata, you will be given an array of unique elements,
// and your task is to rearrange the values
// so that the first max value is followed by the first minimum,
// followed by second max value then second min value, etc.
// input: [15,11,10,7,12]
// expected output: [15,7,12,10,11]
// initialize an empty array
// sort the array in descending order
// while loop and conditions
// two-pointer approach to pair the elements from the beginning and end of the sorted array

function solve(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  const result = [];
  let left = 0;
  let right = sortedArr.length - 1;
  // two pointers, left and right, are initialized to the start and end of the sorted array

  while (left <= right) {
    if (left === right) {
      result.push(sortedArr[left]);
      // if left and right are equal (indicating the middle element in an odd-length array), the element at index left is pushed into the result array
    } else {
      // otherwise, the elements at indices left and right are pushed into the result array
      result.push(sortedArr[left], sortedArr[right]);
    }
    // after pushing the elements into the result array, we need to move the pointers to the next pair of elements
    // this is where the incrementation of left and decrementation of right happens
    left++;
    right--;
  }
  // return result array
  return result;
}

console.log(solve([15, 11, 10, 7, 12]));

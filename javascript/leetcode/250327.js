// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/* Example 1:

 Input: digits = [1,2,3]
 Output: [1,2,4]
 Explanation: The array represents the integer 123.
 Incrementing by one gives 123 + 1 = 124.
 Thus, the result should be [1,2,4]. */

/*Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].*/

/*Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].*/

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([9, 9, 9]));

// pseudo-code:
// start from last digit in array and move towards the beginning or start of array
// for each digit, check if it is less than 9
// if it is we simply increment by 1 and return the modified array
// if the digit is 9, we set it to 0
// if all digits were 9 in the array, set each digit to 0
// add an additional digit of 1 to the  beginning of the array
// return the modified array

// Bob is a lazy man.
// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters)
// and digits are in a given string.

// iterate through string and check if there are integers, if yes, then increment by 1
// iterate through string and check if there are letters (uppercase, lowercase), if yes, then increment by 1
// otherwise do not increment and return the final count as 0
// reduce method

function countLettersAndDigits(input) {
  // convert string into an array of characters using split method
  const charArr = input.split("");
  // use the reduce method to get total count for each character or integer detected
  const result = charArr.reduce((count, char) => {
    // regex checks for any letters or integers lowercase and uppercase
    if (/[a-zA-Z0-9]/.test(char)) {
      // increment by 1 if it meets the condition above
      return count + 1;
    }
    // else return current value of acc / count
    return count;
    // initialize the acc or count as 0
  }, 0);
  // return the count / total
  return result;
}

console.log(countLettersAndDigits("!?..A"));

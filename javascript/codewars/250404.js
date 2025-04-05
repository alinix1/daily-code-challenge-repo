// Given an array of numbers, return an array,
// with each member of input array rounded to a nearest number, divisible by 5
// input: [34.5, 56.2, 11, 13]
// expected output: [35, 55, 10, 15]
function roundToFive(numbers) {
  return numbers.map((num) => Math.round(num / 5) * 5);
}

console.log(roundToFive([34.5, 56.2, 11, 13]));

// function which takes a string, and returns an array
// with all possible rotations of the given string,
// in uppercase.
/* expected output: [ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]*/

// iterate or loop through the string of text
// move first character or letter of string to the end and repeat process
// rotation of string in all caps

function scrollingText(text) {
  // initiate an empty array called results
  const result = [];

  for (let i = 0; i < text.length; i++) {
    // loop through each character of text string
    const scroll = text.substring(i) + text.substring(0, i);
    // takes the substring from index i to the end of the string
    // takes the substring from the beginning of the string up to (but not including) index i
    // concatenate these two parts
    result.push(scroll.toUpperCase());
    // adds each rotated uppercase variation to the result array
  }
  return result;
}

console.log(scrollingText("codewars"));

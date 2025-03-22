// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// input / output: vowelOne( "abceios" ) // "1001110"
// input / output: vowelOne( "aeiou, abc" ) // "1111100100"

// create an empty string for the final result to return at the end
// loop or iterate through string and check for vowels

function vowelOne(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (/[aeiou]/i.test(s[i])) {
      // append character 1 to the result string
      result += "1";
    } else {
      // otherwise append character 0 to the result string as it is not a vowel
      result += "0";
    }
  }
  return result;
}

console.log(vowelOne("aeiou, abc"));

// Complete the solution so that it takes the object
// passed in and generates a human readable string from its key/value pairs
// format should be "KEY = VALUE"
// starts as type object and needs to be converted to type string
// input: { a: 1, b: 2 }
// output: "a = 1, b = 2"

function solution(pairs) {
  // convert object to array
  let objToArr = Object.entries(pairs).flat();

  // initialize result array
  const result = [];

  // loop through the array
  for (let i = 0; i < objToArr.length; i += 2) {
    // after each iteration, increase i by 2 and skip every other item in the array
    result.push(`${objToArr[i]} = ${objToArr[i + 1]}`);
    // key assigned to value in template literal
    // push template literal to result array
  }
  // return result array with comma separated values
  return result.join(",");
}

console.log(solution({ 0: 1, b: 2, c: 3 }));

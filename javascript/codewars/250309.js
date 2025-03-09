// Complete the keysAndValues function so that it takes in an object
//  and returns the keys and values as separate arrays
// input: { a: 1, b: 2, c: 3 }
// output:  [['a', 'b', 'c'], [1, 2, 3]]
function keysAndValues(data) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  return [keys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

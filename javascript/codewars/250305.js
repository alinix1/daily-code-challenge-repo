function elimination(arr) {
  if (arr.length === 0) {
    return null;
  }
  const sorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length - 1; i++) {
    // loop or iterate through sorted array up until the second to last element
    if (sorted[i] === sorted[i + 1]) {
      return sorted[i];
    }
  }
  return null;
}

console.log(elimination([2, 2, 1, 34, 22]));

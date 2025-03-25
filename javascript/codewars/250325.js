// Your job is to create a simple password validation function, as seen on many websites.

// The rules for a valid password are as follows:

// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
// You are permitted to use any methods to validate the password.

function password(str) {
  switch (true) {
    case !/[A-Z]/.test(str):
      return false;
    case !/[a-z]/.test(str):
      return false;
    case !/\d/.test(str):
      return false;
    case str.length < 8:
      return false;
    default:
      return true;
  }
}

console.log(password("Ab1!@#$%^&*()-_+={}[]|:;?/>.<,"));

// What is the perimeter of the nth shape in the sequence (n ≥ 1)
// Formula to calculate the perimeter of the nth shape
// The shape grows by adding squares around the previous shape

function perimeterSequence(a, n) {
  // First shape is a single square with side length a
  // Square has 4 sides
  if (n === 1) {
    return 4 * a;
  }

  // The perimeter increases by additional sides
  return 4 * a + (n - 1) * 4 * a;
}

console.log(perimeterSequence(1, 3));

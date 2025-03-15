// input: string
// output: boolean
// loop or iterate over string to check if last character or characters match ending string

function solution(str, ending) {
  //   return str.endsWith(ending);
  if (ending === "") {
    return true;
  }

  if (ending.length > str.length) {
    return false;
  }

  const startPosition = str.length - ending.length;

  for (let i = 0; i < ending.length; i++) {
    if (str[startPosition + i] !== ending[i]) {
      return false;
    }
  }
  return true;
}

console.log(solution("abcde", "cde"));

const getLength = (str) => {
  var results = [];
  var characters = str.split(' ');
  characters.forEach((item) => {
    results.push(`${item} ${item.length}`);
  });
  return results;
};

console.log(getLength('cake world'));

const litres = (time) => {
  return Math.floor(time * 0.5);
};

console.log(litres());

const minMinMax = (array) => {
  let result = [];
  let stringValues = array.join().split(',');
  stringValues.sort((a, b) => a - b);

  let numValues = stringValues.map((item) => parseInt(item, 10));
  console.log(numValues);

  let minNum = numValues.shift();
  result.push(minNum);

  let maxNum = numValues.pop();
  result.push(maxNum);
};

console.log(minMinMax([-1, 4, 5, -23, 24]));

const vowelCount = (str) => {
  let result = [];
  const arrayStr = str.split('');
  arrayStr.forEach((vowel) => {
    let char = vowel.toLowerCase();
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      result.push(vowel);
    }
  });
  return result.length;
};

console.log(vowelCount('XieoXA'));

const consonantCount = (str) => {
  const arrayStr = str.split('');
  for (var i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u' ||
      char === '^' ||
      char === '$' ||
      char === '&' ||
      char === '#' ||
      char === '0' ||
      char === '1' ||
      char === '2' ||
      char === '3' ||
      char === '4' ||
      char === '5' ||
      char === '6' ||
      char === '7' ||
      char === '8' ||
      char === '9' ||
      char === '_' ||
      char === '/' ||
      char === '-'
    ) {
      arrayStr[i] = '';
    }
  }
  return arrayStr.join('').replace(/ /g, '').length;
};

console.log(consonantCount('1--2b'));

const repeatStr = (times, str) => {
  let result = str.repeat(times);
  return result;
};

console.log(repeatStr(5, 'Hello'));

const invert = (arr) => {
  let final = arr.map((num) => {
    if (num > 0) {
      return -Math.abs(num);
    } else if (num < 0) {
      return Math.abs(num);
    } else if (num === 0) {
      return -Math.abs(num);
    } else {
      return [];
    }
  });
  return final;
};

console.log(invert([0]));

const oddCount = (n) => {
  for (var i = 1; i > n; i++) {
    if (n % 2 !== 0) {
      return n;
    }
  }
};

console.log(oddCount(5));

let i,
  count = 0;
i = 0;
while (i <= 100) {
  if (i % 2 == 1) {
    count = count + 1;
  }
  i++;
}
console.log(count);

function greet(name) {
  if (name === '' || name === null) {
    return null;
  } else {
    return 'hello ' + name;
  }
}

console.log(greet(null));

const sumSquareEvenRootOdd = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let newValEven = nums[i] ** 2;
      result.push(newValEven);
    } else {
      let newValOdd = Math.sqrt(nums[i]);
      result.push(newValOdd);
    }
  }
  let sumTotal = result.reduce(function (acc, num) {
    return acc + num;
  }, 0);
  return Number(sumTotal.toFixed(2));
};

console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]));

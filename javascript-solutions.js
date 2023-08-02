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

const findTarget2 = (payload, target) => {
  const iteratePay = payload.reduce((acc, val1) => {
    payload.forEach((val2) => {
      if (val1 + val2 === target) {
        acc.push(val1);
      }
    });
    return acc;
  }, []);
  return iteratePay;
};

console.log(findTarget2([-1, -3, 4, 7, -5, 18, 10, -23, 5], 15));

const flattenArray = (array) => {
  const flatten = array.toString().split(',');
  return flatten;
};
console.log(
  flattenArray([
    ['hi', [['this is a'], [[['string'], 'that is very'], [[[['nested']]]]]]],
  ]),
);

const reverseSeq = (n) => {
  let results = [];

  while (n > 0) {
    results.push(n);
    n = n - 1;
  }
  return results;
};

console.log(reverseSeq(5));

const reverse = (n) => {
  let results = [];
  for (let i = n; i > 0; i--) {
    results.push(i);
  }
  return results;
};

console.log(reverse(5));

function positiveSum(arrayPos) {
  var sum = 0;
  for (var i = 0; i < arrayPos.length; i++) {
    if (arrayPos[i] >= 0) {
      sum += arrayPos[i];
    }
  }
  return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5]));

function digitize(numbers) {
  var newList = Array.from(String(numbers), Number);
  return newList.reverse();
}

console.log(digitize(12567));

function stringToArray(string) {
  let stringArr = string.split(' ');
  return Array.from(stringArr);
}

console.log(stringToArray('hello world!'));

function removeEveryOther(arr) {
  const odd = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      odd.push(arr[i]);
    }
  }
  return odd;
}

console.log(removeEveryOther([1, 2, 3, 4, 5]));

const stringToNumber = function (str) {
  return parseInt(str, 10);
};

console.log('50');

function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  } else if (num < 0) {
    return num;
  } else {
    return 0;
  }
}

console.log(makeNegative(75));

function noSpace(string) {
  return string.split(' ').join('');
  //   return string.replace(/ /g,'');
}

console.log(noSpace('watermelon candy'));

function find_average(array1) {
  var sum = array1.reduce((accumulator, element) => accumulator + element, 0);
  var average = sum / array1.length || 0;
  return average;
}

console.log(find_average([25, 52, 77, 101]));

function squareSum(numbers) {
  let squareNum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue ** 2;
  }, 0);
  return squareNum;
}

console.log(squareSum([1, 5, 7]));

function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(even_or_odd(71));

function arrayPlusArray(arr1, arr2) {
  let array1 = arr1.concat(arr2);
  let value = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  return value;
}

console.log(arrayPlusArray([1, 5, 7], [13, 20, 2]));

function getMiddle(string) {
  let middleStg = Math.floor(string.length / 2);

  if (string.length % 2 === 0) {
    return string[middleStg - 1] + string[middleStg];
  } else {
    return string[middleStg];
  }
}

console.log(getMiddle('the fox jumps over the moon'));

function descendingOrder(num) {
  return parseInt(num.toString().split('').sort().reverse().join(''));
}

console.log(descendingOrder(101));

function findShort(string) {
  return Math.min(...string.split(' ').map((word) => word.length));
}

console.log(findShort('puppies and kitties'));

function shortcut(string) {
  string = string.replace(/[aeiou]/gi, '');
  return string;
}

console.log(shortcut('abracadabra'));

const addLength = (str) => {
  var results = [];
  var characters = str.split(' ');
  console.log(characters);
  characters.forEach((item) => {
    results.push(`${item} ${item.length}`);
  });
  return results;
};

console.log(addLength('bananas and coconuts are delicious'));

function consonantCount(str) {
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
}

console.log(consonantCount('hello my dear friends!'));

var number = function (array) {
  return array.map((item, index) => {
    return index + 1 + ': ' + item;
  });
};

console.log(number(['a', 'b', 'c']));

const SmallestIntegerFinder = (arr) => {
  arr.sort();
  return arr[0];
};

console.log(SmallestIntegerFinder([24, 55, -1]));

function divisibleBy(numbers, divisor) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor == 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

function countSheeps(arrayOfSheep) {
  let countTrue = [];
  let countFalse = [];

  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      countTrue.push(arrayOfSheep[i]);
    } else {
      countFalse.push(arrayOfSheep[i]);
    }
  }
  return countTrue.length;
}

function countSheep(arrayOfSheep) {
  let result = arrayOfSheep.filter((bool) => bool === true);
  return result.length;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
  ]),
);

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let result = array.reduce((acc, currentVal) => {
      acc += currentVal;
      return acc;
    }, 0);
    return result / array.length;
  }
}

console.log(findAverage([1, 2, 3, 4, 5, 6, 7]));

const findAvg = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, currentVal) => (acc += currentVal), 0) / array.length;
};

console.log(findAvg([1, 2, 3, 4, 5, 6, 7]));

function feast(beast, dish) {
  if (beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1)) {
    return true;
  } else {
    return false;
  }
}

console.log(feast('great blue heron', 'garlic naan'));

function correct(string) {
  let updateString = string.split('').join();
  const result = { 1: 'I', 0: 'O', 5: 'S' };

  let final = updateString.replace(
    /\b(?:1|0|5)\b/gi,
    (matched) => result[matched],
  );
  return final.replaceAll(',', '');
}

console.log(correct('L0ND0N'));

function smash(words) {
  if (words.length === 0) {
    return '';
  } else {
    let result = words.join(' ').toString();
    return result;
  }
}

console.log(smash(['hello', 'world', 'this', 'is', 'great']));

function twoSort(str) {
  const lowercaseWords = str.map((word) => word.toLowerCase());

  let sortedStr = lowercaseWords.sort();
  let final = sortedStr[0];

  return final.replace(/.{1}/g, '***$&').slice(3);
}

console.log(
  twoSort([
    'bitcoin',
    'Take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ]),
);

function twoSortString(str) {
  const lowercaseWords = str.map((word) => word.toLowerCase());

  return lowercaseWords.sort()[0].split('').join('***');
}

console.log(
  twoSortString([
    'bitcoin',
    'Take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ]),
);

function highAndLow(numbers) {
  let result = numbers.split(' ');
  let result1 = result.map((str) => {
    return parseInt(str);
  });
  let result2 = result1.sort((a, b) => b - a);

  return `${result2[0]} ${result2.slice(-1)}`;
}

console.log(highAndLow('1 2 -3 4 5'));

function disemvowel(str) {
  const noVowels = str.replace(/[aeiou]/gi, '');
  return noVowels;
}

console.log(disemvowel('This website is for losers LOL!'));

function filterList(arr) {
  let filtered = [];
  arr.forEach((item) => {
    if (typeof item !== 'string') {
      filtered.push(item);
    }
  });
  return filtered;
}

console.log(filterList([1, 2, 'a', 'b']));

function filterListFun(arr) {
  let result = arr.filter((item) => {
    if (typeof item === 'number') {
      return true;
    } else {
      return false;
    }
  });
  return result;
}

console.log(filterListFun([1, 'a', 'b', 0, 15]));

// function filterListFun(arr) {
//   return arr.filter(item => typeof item === "number");
// }

// console.log(filterListFun([1,2,'a','b']))

function isIsogram(str) {
  let strLowerCase = str.toLowerCase();
  let strList = strLowerCase.split('');

  for (let i = 0; i < strList.length; i++) {
    let index = strList[i];
    if (strList.indexOf(index) !== strList.lastIndexOf(index)) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram('moOse'));

// approach using RegEx

// function isIsogram(str){
//   return !str.match(/([a-z]).*\1/i);
// }

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('this is an example, hello!'));

const capitals = (word) => {
  let arrChars = word.split('');

  let result = arrChars.map((item, index) => {
    if (item === item.toUpperCase()) {
      return index;
    }
  });
  let filtered = result.filter((item) => item !== undefined);
  return filtered;
};

console.log(capitals('HeLlo'));

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles']));

function countDevelopers(list) {
  let result = list.reduce((acc, currentContinent) => {
    if (
      currentContinent.continent.includes('Europe') &&
      currentContinent.language.includes('JavaScript')
    ) {
      acc.push(currentContinent.continent);
    }
    return acc;
  }, []);
  return result.length;
}

var list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'JavaScript',
  },
  {
    firstName: 'Maia',
    lastName: 'S.',
    country: 'Tahiti',
    continent: 'Oceania',
    age: 28,
    language: 'JavaScript',
  },
  {
    firstName: 'Shufen',
    lastName: 'L.',
    country: 'Taiwan',
    continent: 'Asia',
    age: 35,
    language: 'HTML',
  },
  {
    firstName: 'Sumayah',
    lastName: 'M.',
    country: 'Tajikistan',
    continent: 'Asia',
    age: 30,
    language: 'CSS',
  },
];

console.log(countDevelopers(list1));

function greetDevelopers(list) {
  let final = list.map((item) => ({
    ...item,
    greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`,
  }));
  return final;
}

var list1 = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];

console.log(greetDevelopers(list1));

function convertHashToArray(hash) {
  var finalResult = [];
  for (i in hash) {
    // console.log('each key', i)
    // console.log('each value', hash[i])
    finalResult.push([i, hash[i]]);
  }
  return finalResult.sort();
}

// const convertHashToArray = (hash) => {
//   return Object.entries(hash).sort()
//  }

console.log(
  convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' }),
);

// convert hash into array
// expected output:
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  let l1 = a1.map((str) => {
    return str.length;
  });

  let l2 = a2.map((str) => {
    return str.length;
  });

  return Math.max(
    Math.max(...l1) - Math.min(...l2),
    Math.max(...l2) - Math.min(...l1),
  );
};

a1 = [
  'hoqq',
  'bbllkw',
  'oox',
  'ejjuyyy',
  'plmiis',
  'xxxzgpsssa',
  'xxwwkktt',
  'znnnnfqknaz',
  'qqquuhii',
  'dvvvwz',
];
a2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];

console.log(mxdiflg(a1, a2));

const outed = (meet, boss) => {
  const ratings = Object.values(meet);
  const names = Object.keys(meet);

  const totalScore =
    ratings.reduce((acc, currentRating) => {
      return (acc += currentRating);
    }, 0) + meet[boss];

  return totalScore / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
};

console.log(
  outed(
    {
      tim: 0,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    'laura',
  ),
);

const outed1 = (meet, boss) => {
  let names = Object.keys(meet);
  let ratings = Object.values(meet);

  let total =
    ratings.reduce((acc, currentRating) => {
      return acc + currentRating;
    }, 0) + meet[boss];

  let score = total / names.length;

  if (score <= 5) {
    return 'Get Out Now!';
  } else {
    return 'Nice Work Champ!';
  }
};

let meet = {
  tim: 0,
  jim: 2,
  randy: 0,
  sandy: 7,
  andy: 0,
  katie: 5,
  laura: 1,
  saajid: 2,
  alex: 3,
  john: 2,
  mr: 0,
};

let boss = 'laura';
console.log(outed1(meet, boss));

const winnerList1 = [
  { season: '1990-00', team: 'Real Madrid', country: 'Spain' },
  { season: '2000-01', team: 'Bayern Munich', country: 'Germany' },
  { season: '2001-02', team: 'Real Madrid', country: 'Spain' },
  { season: '2002-03', team: 'Milan', country: 'Italy' },
  { season: '2003-04', team: 'Porto', country: 'Portugal' },
];

const countWins = (winnerList1, country) => {
  return winnerList1.reduce((acc, currentCountry) => {
    if (currentCountry.country === country) {
      acc++;
    }
    return acc;
  }, 0);
};

console.log(countWins(winnerList1, 'Spain'));

var number = function (busStops) {
  let arr = busStops.flat();
  let sumEven = 0;

  for (let i in arr) {
    if (i % 2 === 0) {
      sumEven = sumEven + arr[i];
    }
  }

  let sumOdd = 0;

  for (let i in arr) {
    if (i % 2 !== 0) {
      sumOdd = sumOdd + arr[i];
    }
  }
  let final = sumEven - sumOdd;
  return final;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ]),
);

function sortAnimal(animal) {
  if (animal === null) {
    return null;
  }

  let sortName = animal.sort((a, b) => {
    let fa = a.name.toLowerCase();
    let fb = b.name.toLowerCase();

    if (fa.localeCompare(fb) < 0) {
      return -1;
    } else if (fa.localeCompare(fb) > 0) {
      return 1;
    } else if (fa.localeCompare(fb) == 0) {
      return 0;
    }
  });

  let sortNumberOfLegs = sortName.sort((a, b) => {
    return a.numberOfLegs - b.numberOfLegs;
  });

  return sortNumberOfLegs;
}
var animal = [
  { name: 'Cat', numberOfLegs: 4 },
  { name: 'Snake', numberOfLegs: 0 },
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Pig', numberOfLegs: 4 },
  { name: 'Human', numberOfLegs: 2 },
  { name: 'Bird', numberOfLegs: 2 },
];

console.log(sortAnimal(animal));

const duplicateEncode = (word) => {
  let newString = '';
  let lowerWord = word.toLowerCase();
  let strArr = lowerWord.split('');

  strArr.forEach((item, index) => {
    if (strArr.indexOf(item) !== index) {
      newString += ')';
    } else if (strArr.lastIndexOf(item) !== index) {
      newString += ')';
    } else newString += '(';
  });

  return newString;
};

console.log(duplicateEncode('abracadabra'));

const duplicateEncodeOther = (word) => {
  const charCount = new Map();
  const lowerWord = word.toLowerCase();
  let newString = '';

  // Count the occurrences of each character in the word
  for (const char of lowerWord) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Build the new string based on the character counts
  for (const char of lowerWord) {
    if (charCount.get(char) > 1) {
      newString += ')';
    } else {
      newString += '(';
    }
  }

  return newString;
};

console.log(duplicateEncodeOther('abracadabra'));

const twoSum = (numbers, target) => {
  let result = [];
  numbers.forEach((num1, index1) => {
    numbers.forEach((num2, index2) => {
      if (num1 + num2 === target && index1 !== index2) {
        result = [index1, index2];
      }
    });
  });
  return result;
};

console.log(twoSum([1, 2, 3], 4));

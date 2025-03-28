// Your task is to get Zodiac Sign using input day and month
// Create a hash map or object with functions as values to check conditions for month and day match for each Zodiac sign

const getZodiacSign = (day, month) => {
  // Check for edge cases where date would be invalid
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return "Invalid date";
  }

  // Hash map of Zodiac signs as keys with their date ranges as values
  const zodiacSignMap = {
    Capricorn: ({ month, day }) =>
      (month === 12 && day >= 22) || (month === 1 && day <= 19),
    Aquarius: ({ month, day }) =>
      (month === 1 && day >= 20) || (month === 2 && day <= 18),
    Pisces: ({ month, day }) =>
      (month === 2 && day >= 19) || (month === 3 && day <= 20),
    Aries: ({ month, day }) =>
      (month === 3 && day >= 21) || (month === 4 && day <= 19),
    Taurus: ({ month, day }) =>
      (month === 4 && day >= 20) || (month === 5 && day <= 20),
    Gemini: ({ month, day }) =>
      (month === 5 && day >= 21) || (month === 6 && day <= 20),
    Cancer: ({ month, day }) =>
      (month === 6 && day >= 21) || (month === 7 && day <= 22),
    Leo: ({ month, day }) =>
      (month === 7 && day >= 23) || (month === 8 && day <= 22),
    Virgo: ({ month, day }) =>
      (month === 8 && day >= 23) || (month === 9 && day <= 22),
    Libra: ({ month, day }) =>
      (month === 9 && day >= 23) || (month === 10 && day <= 22),
    Scorpio: ({ month, day }) =>
      (month === 10 && day >= 23) || (month === 11 && day <= 21),
    Sagittarius: ({ month, day }) =>
      (month === 11 && day >= 22) || (month === 12 && day <= 21),
  };

  // Check each sign's condition
  for (const [sign, condition] of Object.entries(zodiacSignMap)) {
    if (condition({ month, day })) {
      return sign;
    }
  }
  // otherwise return invalid date
  return "Invalid date";
};

// Test cases
console.log(getZodiacSign(8, 4)); // Aries
console.log(getZodiacSign(10, 10)); // Libra
console.log(getZodiacSign(25, 1)); // Aquarius

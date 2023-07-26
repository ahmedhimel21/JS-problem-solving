function romanToInteger(romanNumeral) {
  const romanNumeralsMap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  let result = 0;
  let previousValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentChar = romanNumeral[i];
    const currentValue = romanNumeralsMap[currentChar];

    if (currentValue < previousValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    previousValue = currentValue;
  }

  return result;
}
let romanNumber = "V";
let integer = romanToInteger(romanNumber)
console.log(integer);

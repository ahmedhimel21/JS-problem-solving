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
  romanNumeral.split('').forEach((number,i) => {
    if(romanNumeralsMap[number]<romanNumeralsMap[romanNumeral[i+1]]){
      result -= romanNumeralsMap[number];
    } else{
      result += romanNumeralsMap[number];
    }
  });
  return result;
}
let romanNumber = "XI";
let integer = romanToInteger(romanNumber)
console.log(integer);

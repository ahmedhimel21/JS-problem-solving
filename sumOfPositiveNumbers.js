function sumOfPositiveNumbers(arr) {
  let positiveNumbersSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbersSum += arr[i];
    }
  }
  return positiveNumbersSum;
}
let numbers = [2,-5,10,-3,7];
let output = sumOfPositiveNumbers(numbers);
console.log(output);

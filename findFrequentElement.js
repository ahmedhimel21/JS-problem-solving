function findMostFrequentElement(numbers) {
  const frequencyMap = {};
  numbers.map((number) =>{
    frequencyMap[number] = frequencyMap[number] +1 || 1;
  })
  let keys = Object.keys(frequencyMap);
  let values = Object.values(frequencyMap);
  let maxNumber = Math.max(...values);
  let index = values.findIndex((i) =>{
    return i===maxNumber;
  })
  let frequentEle = keys[index];
  return frequentEle;
}


const numbers = [1, 2, 3, 2, 4, 2, 5, 2, 6];
const output = findMostFrequentElement(numbers);
console.log(output);

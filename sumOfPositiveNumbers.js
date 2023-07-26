function sumOfPositiveNumbers(arr){
  return arr.filter((number) => number>0).reduce((total,current) =>{
    return total + current;
  },0)
}
let numbers = [2,-5,10,-3,7,2,10,-10,1.5];
let output = sumOfPositiveNumbers(numbers);
console.log(output);
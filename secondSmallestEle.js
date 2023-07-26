function secondSmallestEle (arr){
  let secSmallestEle = arr.sort()[1];
  return secSmallestEle;
}
let arr = [17,21,36,16,22,15,43,45];
let output = secondSmallestEle(arr);
console.log(output);
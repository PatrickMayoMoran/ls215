function makeConditionChecker(numToBeBiggerThan) {
  return function(element) {
    return element > numToBeBiggerThan;
  }
}

const isBiggerThan2 = makeConditionChecker(2);

// function isItBiggerThan2(x) {
//   return x > 2
// }

let arr = [1, 2, 3, 4, 5, 6, 7];
let b = arr.filter(isBiggerThan2);
console.log(b)

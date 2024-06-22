// Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function includes3(array) {
  let onlyThrees = array.filter(n => n === 3);
  if (onlyThrees.length > 0 ) return true;
  return false;
}

console.log(includes3(numbers1));
console.log(includes3(numbers2));
console.log(includes3(numbers3));
// console.log(numbers1.includes(3));
// console.log(numbers2.includes(3));
// console.log(numbers3.includes(3));

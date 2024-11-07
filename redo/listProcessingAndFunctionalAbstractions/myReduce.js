/*
BUGGY IMPLEMENTATION - incase of no initial value given,
  the first value of the array will be used twice - once as the initial value
  and once again as the first element in the array
  Need to amend implementation to start iteration on 0 or 1 index based
  on initial value
function myReduce(array, func, initial) {
  initial = initial || array[0];
  let result = initial;
  array.forEach(e => result = func(result, e));

  return result;
}
*/

function myReduce(array, func, initial) {
  let index;
  let accumulator;

  if (initial === undefined) {
    index = 1;
    accumulator = array[0];
  } else {
    index = 0;
    accumulator = initial;
  }

  array.slice(index).forEach(e => accumulator = func(accumulator, e));

  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

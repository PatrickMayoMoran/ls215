// Return an array that has the same number of elements, but transformed so that
// each element is the total sum of itself and all preceding elements

// GOAL: Above
// Input: array
// Output: Array
//
// RULES:
//  Always get single array as argument
//  Integers always positive, whole numbers?
//    No, could be negative integers
//    No Infinity or NaN
//  Array will not be sparse
//  New array should be returned

// DATA STRUCTURES/ALGORITHM
//  Transformation problem
//  Helpers I'd want: 
//    Sum

//  Initialize a result array
//  Initialize a running total at 0
//  Iterate through original collection, adding each element to running total
//  Add running total to result array on each iteration
//  return the result array

function runningTotal(array) {
  let runningTotal = 0;

  return array.map((e) => runningTotal += e);
  // let result = [];
  // let runningTotal = 0;

  // array.forEach(e => {
  //   runningTotal += e;
  //   result.push(runningTotal);
  // });

  // return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
console.log(runningTotal([7, -1, -5, 4]));                     // [7, 6, 1, 5]

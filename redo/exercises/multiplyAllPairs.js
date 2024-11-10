/*
  GOAL: return a single array of all the products of every number in first
  argument multiplied by every number in the second argument

  INPUT: Two arrays
  OUTPUT: single array

  RULES/EXAMPLES QUESTIONS
    Always two arguments? Yes
    Always two arrays? Yes
    Arrays could be empty? Yes, either one, if either return null
    Array elements always be integers? Yes
    Sparse elements? No

    Return value
      Order, ascending
*/
function multiplyAllPairs(array1, array2) {
  if (array1.length === 0 || array2.length === 0) return null;
  let products = [];
  array1.forEach(num => {
    array2.forEach(num2 => products.push(num * num2));
  })
  return products.sort((a,b) => a - b);
  // need explicit math for sorting, otherwise will sort by string order
}
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16
console.log(multiplyAllPairs([], [2,3,4])); // null

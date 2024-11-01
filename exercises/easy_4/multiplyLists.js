/* GOAL: Return an array where each element is the product of the corresponding
 elements in the two argument arrays

INPUT two arrays
OUTPUT array

RULES
  Always two array arguments? Yes
  Will array elements always be integers? Yes
  Infinity, Not a Number? No, always integers
  Sparseness? No
  Arrays always the same length? Yes
  Array arguments ever be empty? No

Algorithm
  Create a new products array
  for length of array one, 
    iterate through indices
    add the product of the numbers at that index to the products

  return product array
*/

function multiplyList(listOne, listTwo) {
  let products = [];
  for (let i = 0; i < listOne.length; i += 1) {
    products.push(listOne[i] * listTwo[i]);
  }

  return products;

}
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

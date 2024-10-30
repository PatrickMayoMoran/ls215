/*
  split returns an array of results based on the designated separator
  no separator means whole string
  empty string separator means every character
*/

let cat = 'tiny cat';
console.log(cat.split()); // ['tiny cat'] 
console.log(cat.split('')); // ['t', 'i', 'n', ...]
console.log(cat.split(' ')); // ['tiny', 'cat'] - separator not included
console.log(cat.split(/y/, 1)); // ['tin'] - limit on how many results
console.log(cat.split(/y/, 0)); // []

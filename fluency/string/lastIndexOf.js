/*
  lastIndexOf returns the index of the search term found in the calling string
  if search term is not present, returns -1
  optional second argument of ending position for search
*/

let word = "Santana";
console.log(word.lastIndexOf('a')); // 6 - default is end at +Infinity
console.log(word.lastIndexOf('a', 100)); // 6 - same as default
console.log(word.lastIndexOf('a', 5)); // 4
console.log(word.lastIndexOf('a', 3)); // 1
console.log(word.lastIndexOf('a', 0)); // -1 - only searches beginning of string
console.log(word.lastIndexOf('a', -5)); // -1 - same as 0

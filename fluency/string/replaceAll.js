/*
  returns a new string with all occurrences replaced
  can take string or regex pattern
  regex must have global flag set
*/

let cat = "kitty cat";
console.log(cat.replaceAll('t', 'p')); // kippy cap
console.log(cat.replaceAll(/t/g, 'p')); // kippy cap

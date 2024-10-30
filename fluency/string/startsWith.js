/*
  returns true or false depending on whether string starts with argument
*/

let cat = 'tiny cat';
console.log(cat.startsWith('t')); // true
console.log(cat.startsWith('ti')); // true
console.log(cat.startsWith('cat', 5)); // true
console.log(cat.startsWith('meow')); // false

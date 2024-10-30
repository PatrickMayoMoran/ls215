/*
  Number.isNaN returns true if and only if arg is a number with value NaN
  returns false for everything else
  functionally equivalent to x !== x because NaN is the only value
  that does not equal itself 
*/

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(1/NaN)); // true
console.log(Number.isNaN('meow')); // false

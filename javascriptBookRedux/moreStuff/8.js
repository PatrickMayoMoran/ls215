// write a function that returns true if argument is NaN, false otherwise

// NaN:
//  - typeof should return string 'number'
//  - value is not === to itself

/*
FIRST SOLUTION:
  - Has code smell of "If this is true, return true"
  - if the boolean comparison is what we are evaluating... we can just return it!
function isNotANumber(value) {
  if (typeof value === "number" && value !== value) {
    return true;
  } else {
    return false;
  }
}
*/

function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN)); // true, all others false
console.log(isNotANumber(7));
console.log(isNotANumber('meow'));
console.log(isNotANumber(4.56));
console.log(isNotANumber(Infinity));
console.log(isNotANumber(-Infinity));
console.log(isNotANumber(0));
console.log(isNotANumber(true));
console.log(isNotANumber(undefined));
console.log(isNotANumber(null));

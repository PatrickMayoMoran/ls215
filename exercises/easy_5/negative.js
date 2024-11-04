/*
** Original solution
function negative(number) {
  if (number >= 0) return -number;
  return number;
}
*/

/*
** Provided solution
function negative(number) {
  return Math.abs(number) * -1;
}
*/

/*
** Alternative solution with explicit guard clauses for -0 and negative numebrs
function negative(number) {
  if (Object.is(number, -0)) return number;
  if (number < 0) return number;

  return number * -1;
}
*/

// Alternative solution using ternary operator
function negative(number) {
  return (number >= 0) ? number * -1 : number;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

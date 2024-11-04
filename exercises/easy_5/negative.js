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

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

/*
** Original solution using method chain, toString(), and no radix with parseInt
function reverseNumber(inputNumber) {
  return parseInt(inputNumber.toString().split('').reverse().join(''));
}
*/

// Provided solution using explicit base 10 with parseInt
function reverseNumber(inputNumber) {
  let digits = String(inputNumber).split('');
  return parseInt(digits.reverse().join(''), 10);
}

console.log(reverseNumber(12345));    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1

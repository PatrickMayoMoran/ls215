/*
  Return an array with integer versions of each number in a given positive integer

  INPUT single positive integer
  OUTPUT array of integers

  RULES/QUESTIONS
    Always given an argument? Yes
    Argument always a positive, whole number integer? Yes

  DSA
    array for each digit/character
    transform all of them - transformation problem

  ** Convert digit to a string and save to a variable
  ** split string into its character in an array
  transform each character to an integer
  return array of integers

*/

function digitList (integer) {
  let stringInteger = integer.toString();
  return stringInteger.split('').map(d => parseInt(d));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

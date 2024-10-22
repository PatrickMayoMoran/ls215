/*
    fromCodePoint is a static method that returns a string from the sequence
    of code points given
*/
let word = "tio";
let number1 = word.charCodeAt(0);
let number2 = word.charCodeAt(1);
let number3 = word.charCodeAt(2);

console.log(String.fromCodePoint(number1, number2, number3));
console.log(number1);
console.log(number2);
console.log(number3);

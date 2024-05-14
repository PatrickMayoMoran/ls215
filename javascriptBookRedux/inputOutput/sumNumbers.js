let rlSync = require('readline-sync');

let number1 = rlSync.question("Please enter your first number:\n");
let number2 = rlSync.question("Please enter your second number:\n");
number1 = Number(number1);
number2 = Number(number2);

console.log(`${number1} + ${number2} = ${number1 + number2}`);

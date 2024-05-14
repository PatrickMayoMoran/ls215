let rlSync = require('readline-sync');

let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");
let fullName = firstName + ' ' + lastName;
console.log(`Hello, ${fullName}!`);

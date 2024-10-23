/*
    at returns the character at the specified index
    at accepts negative indices
    if index is out of bounds, returns undefined
*/

let tio = 'tio';

console.log(tio.at(0));   // "t"
console.log(tio.at(-2));  // "i"
console.log(tio.at(2));   // "o"
console.log(tio.at(3));   // undefined
console.log(tio.at(-4));  // undefined

/*
    includes returns true or false for if the search string is present
*/

let tio = 'tio';
console.log(tio.includes('tio')); // true
console.log(tio.includes('')); // true - empty string returns true
console.log(tio.includes('meow')); // false
console.log(tio.includes('tio', 1)); // false - optional 2nd argument sets starting position for search

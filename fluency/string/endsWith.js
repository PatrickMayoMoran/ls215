/*
    endsWith looks to see if the string ends with the given search string
    if given search string is empty, endsWith returns true
    you can also give an ending position
*/

let tio = 'tio';
console.log(tio.endsWith('o'));
console.log(tio.endsWith('tio')); // search strings can be long!
console.log(tio.endsWith('meow'));
console.log((tio.endsWith('')));

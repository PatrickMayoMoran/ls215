/*

*/

console.log("Meow".padEnd(15)); // default is padded with spaces
console.log("Meow".padEnd(15, '-')); // 'Meow-----------'
console.log("Meow".padEnd(2, '-')); // Meow - if padding is less than string length, returned as is

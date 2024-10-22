/*
    concat concatenates arguments to calling string and returns this new string value
    converts arguments to strings if they are not strings
*/

let string = "Mayo";
let words = [" ", "is", " ", "delish"];
console.log(string.concat("nnaise")); // Mayonnaise
console.log(string.concat(...words)); // Mayo is delish
console.log(string.concat({}));       // Mayo[object Object]
console.log(string.concat([]));       // Mayo
console.log(string.concat(undefined));// Mayoundefined

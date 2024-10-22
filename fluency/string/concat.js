/*
    concat concatenates arguments to calling string and returns this new string value
    converts arguments to strings if they are not strings
*/

let string = "Mayo";
let words = [" ", "is", " ", "delish"];
console.log(string.concat("nnaise"));
console.log(string.concat(...words));
console.log(string.concat({}));
console.log(string.concat([]));
console.log(string.concat(undefined));

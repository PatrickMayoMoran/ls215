/*
*  toString returns the string value of the object it is called on
*  toString does not work on literals; you need to use String for those
*/

let stringy = "Switzerland";
let sObject = new String("Switzerland");

console.log("Meow".toString()); // Meow - same as valueOf
console.log(stringy.toString()); // Switzerland
console.log(sObject); // [String: "Switzerland"]
console.log(sObject.toString()); // Switzerland
console.log((55).toString()); // 55
console.log(String(undefined)); // undefined
console.log(String(55));

/*
* new String creates an object, whereas just using String creates a string
*/

let stringyThing = String("meow");
let stringObject = new String("meow");

console.log(`The type of stringyThing is ${typeof stringyThing}`);
console.log(`The type of stringObject is ${typeof stringObject}`);

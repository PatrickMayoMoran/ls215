// Object.hasOwn
// tests if an object itself has a property - not inherited

let me = { name: "Patrick" };
console.log(Object.hasOwn(me, "name")); // true
console.log(Object.hasOwn(me, "age")); // false

let other = Object.create(me);
console.log(other);
console.log(Object.hasOwn(other, "name")); // false, name is inherited!
console.log(other.name);

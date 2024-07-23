// Object.assign merges objects into the first given object
// identical properties are overwritten by later objects
// Properties copied are shallow - if the value is a reference, the reference is copied

let obj1 = { a: 1, b: 1, c: 1};
let obj2 = { b: 2, c: 2 };
let obj3 = { c: 3 };

let merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged); // { a: 1, b: 2, c: 3 }

// SHALLOW COPY
let pets = ["Pretzel", "Tiny"];
let myPets = { home: pets, away: [] };
let friendPets = Object.assign({}, myPets);
friendPets['home'].push("Clover");
console.log(myPets); // { home: ["Pretzel", "Tiny", "Clover"]
console.log(friendPets); // { home: ["Pretzel", "Tiny", "Clover"]

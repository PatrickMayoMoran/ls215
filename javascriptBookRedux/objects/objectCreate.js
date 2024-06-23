let bob = {name: "Bob", age: 22};
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name);
console.log(studentBob);

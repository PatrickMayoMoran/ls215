let bob = {name: "Bob", age: 22};
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(Object.keys(studentBob)); // will only be 'year'
for (let key in studentBob) {         // will show us name, age, and year
  console.log(`Key of ${key} and value of ${studentBob[key]}`);
}

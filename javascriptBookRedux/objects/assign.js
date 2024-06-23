let mayo = {
  name: "Mayo",
  age: 30,
}

let coach = Object.assign({job: "coach"}, mayo);

let groceryOne = {0: "milk", 1: "cheese"}
let groceryTwo = {2: "celery", 3: "chicken"}
let groceryThree = Object.assign({}, groceryOne, groceryTwo);
console.log(groceryThree);

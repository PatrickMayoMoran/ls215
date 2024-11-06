let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// full imperative style, every line is implementation and we must understand
// the implementation to know what program is doing
/*
let newArray = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 1) {
    newArray.push(numbers[i]);
  }
}

console.log(newArray);
*/

/*
// imperative style with function abstraction
function isOddNumber(number) {
  return (number % 2) === 1;
}

let newArray = []

for (let i = 0; i < numbers.length; i += 1) {
  if (isOddNumber(numbers[i])) {
    newArray.push(numbers[i]);
  }
}

console.log(newArray);
*/

// iteration focused abstraction
function isOddNumber(number) {
  return (number % 2) === 1;
}

let newArray = [];

numbers.forEach(e => {
  if (isOddNumber(e)) {
    newArray.push(e);
  }
});

console.log(newArray);

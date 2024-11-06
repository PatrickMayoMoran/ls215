"use strict"
/*
  Take advantage of first class functions by:
    creating a function iterate through an array
    Have that function take a callback function as an argument

  Being able to pass functions as arguments means we don't need to hardcode
    functionality into our iterate method.
    The only thing locked into implementation is how our array is 
    iterated through.
    Flexible is what array is passed and what the callback function does.
*/

function iterate(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

// Our array
let count = [1, 2, 3, 4, 5];

// Callback
function logger(element) {
  console.log(element);
}

// invocation without first class function stored in variable
iterate(count, function (number) { console.log(number)});

// invocation with first class function in variable
iterate(count, logger);

// implementing other behavior - logging Odd or Even
function oddOrEven(number) {
  if (number % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

iterate(count, oddOrEven);

// using built in forEach
count.forEach(oddOrEven);

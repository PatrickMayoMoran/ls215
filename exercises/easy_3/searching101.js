// write a program that solicits 6 numbers from the user and logs whether
// the 6th number appears in the first 5

function sixInFive () {
  let numbers = [];

  numbers.push(parseInt(prompt("Enter a Number")));
  numbers.push(parseInt(prompt("Enter a Number")));
  numbers.push(parseInt(prompt("Enter a Number")));
  numbers.push(parseInt(prompt("Enter a Number")));
  numbers.push(parseInt(prompt("Enter a Number")));
  
  if (numbers.some(n => n > 25)) {
    console.log(`${numbers} does include a number greater than 25!`);
  } else {
    console.log(`${numbers} does not include a number greater than 25 :(.`);
  }
}

sixInFive()

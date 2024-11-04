/*
function repeater (string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    newString += string[i] + string[i];
  }

  return newString;
}
*/

function repeater(string) {
  let doubled = [];

  for (let i = 0; i < string.length; i += 1) {
    doubled.push(string[i], string[i]);
  }

  return doubled.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

/*
** Original solution for two name names
function swapName(name) {
  return name.split(' ').reverse().join(', ');
}
*/

function swapName(name) {
  // let lastName = / \w+$/; -- this removes last name
  let names = name.split(' ');
  let lastName = names.pop();
  return lastName + ', ' + names.join(' ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('John Jacob Jingleheimer Schmidt'));

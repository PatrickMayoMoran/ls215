// initialized balanced to 0
// loop through characters
// if character is open parentheses, add 1 to balanced
// if character is closed parentheses, subtract 1 from balanced
// if character is something else, continue
// if balanced is negative, return false
//
// after loop, if balanced is 0, return true
function isBalanced(string) {
  let balanced = 0;

  for (let i = 0; i < string.length; i += 1) {
    let character = string[i];
    if (character === '(') {
      balanced += 1;
    } else if (character === ')') {
      balanced -= 1;
    } else {
      continue;
    }

    if (balanced < 0) return false;
  }

  return balanced === 0
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false

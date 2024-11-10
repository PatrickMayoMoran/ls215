/*
  RULES:
    matching parentheses means open first and then closed
*/

function isBalanced(string) {
  let open = 0;
  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    if (char === '(') open += 1;
    if (char === ')') open -= 1;
    if (open < 0) return false;
    continue;
  }

  return open === 0;

}
console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false


// PROBLEM: return a new string with all arithmetic operators
//          replaced with a question mark
// INPUT: string
// OUTPUT: new string

// RULES:
//  original string remains unchanged

// DSA
// No data structure needed, just a string
// replace arithmetic operators with a question mark and return string
function mysteriousMath (formula) {
  let arithmeticOperators = /[+\-*\/]/g;
  return formula.replace(arithmeticOperators, "?");
}
console.log(mysteriousMath('4 + 3 - 5 = 2'));
// '4 ? 3 ? 5 = 2'
console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'));
// '(4 ? 3 ? 2) ? 7 ? 1 = 1'

// PROBLEM: return a new string with the first arithmetic operator
//          replaced with a question mark
// INPUT: string
// OUTPUT: new string

// RULES:
//  original string remains unchanged
//  just replace first one

// DSA
// No data structure needed, just a string
// replace one arithmetic operator with a question mark and return string
function mysteryMath (formula) {
  let arithmeticOperators = /[+\-*\/]/;
  return formula.replace(arithmeticOperators, "?");
}

console.log(mysteryMath('4 + 3 - 5 = 2'));
// '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// '(4 ? 3 + 2) / 7 - 1 = 1'

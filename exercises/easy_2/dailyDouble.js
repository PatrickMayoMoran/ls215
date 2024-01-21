// GOAL: given a string, return a new string with any consecutive,
// repeating characters removed
// INPUT: string
// OUTPUT: string
//
// RULES
//  EXPLICIT
//
//  IMPLICIT
//    no argument given, return undefined
//    any arguments given, return a string
//    for string arguments, de-double characters and add that to return string
//    for non-string arguments, do nothing
//
//  DATA STRUCTURES
//    none, just simple iteration through length of given string
//    array of arguments
//
//  ALGORITHM
//    if length of argument array is 0, return undefined
//    create a return string
//    filter arguments down to ones with a type of string
//    iterate through string arguments:
//      if string length is 0, continue
//      if string length is 1 or more, iterate through string
//      initialize previousCharacter to empty string
//        start iteration at index 0, go length of string
//        set current character to current index number
//        if current character is same as the previous character,
//          continue
//        if current character is different from previous character
//          set previous character to current character
//          add current character to return string
//
//    return de-doubled string
function crunch(...args) {
  if (args.length === 0) return undefined;
  let deDoubled = '';

  return deDoubled;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
console.log(crunch(5));                            // ""
console.log(crunch());                             // undefined
console.log(crunch(5, undefined, 'mmmmeeeeooowww'));// 'meow'
console.log(crunch('cccaaattt', NaN, 'dddooggg', undefined));// 'catdog'
console.log(crunch(undefined));                     // ''
console.log(crunch('\n\n\t\t\t\t    \v\v\v'));      // '\n\t \v'

/*
  exec returns the first match or...
  exec is when you only want the first match and info
*/

let pattern = /santa/;
let aMatch = 'santa cruz is beautiful'
let noMatch = 'farwell is beautiful'
let manyMatches = 'santa cruz, santa clara, and santa barbara are all cities';

console.log(pattern.exec(aMatch)); // ['santa', index: 0, input: 'santa cruz is beautiful, groups: undefined]
console.log(pattern.exec(noMatch)); // null
console.log(pattern.exec(aMatch).index); // 0
console.log(pattern.exec(manyMatches)); // ['santa', index: 0,...]

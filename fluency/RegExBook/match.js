/*
  match is when you want all the matches
  need global flag for all matches
*/

let santa = /santa/g;
let manyMatches = 'santa cruz, santa clara, and santa barbara are cities';
let noMatch = 'farwell is a town'

console.log(manyMatches.match(santa)); // ['santa', 'santa', 'santa']
console.log(noMatch.match(santa)); // null

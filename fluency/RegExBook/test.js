/*
  test returns true or false whether or not the string argument is a match
  for the calling RegEx
  test is for when you do not care about the contents of the match, you
  just care about whether or not a match is present
*/

let cruz = /cruz/;
let santaCruz = 'santa cruz';
let santaBarbara = 'santa barbara';

console.log(cruz.test(santaCruz));    // true
console.log(cruz.test(santaBarbara)); //false

/*
  matchAll returns an iterable of nested arrays with info on all matches
  matchAll requires the global flag otherwise a TypeError is thrown
*/

let regex = /santa/ig;
let sentence = "Santa Cruz, Santa Clara and Santa Barbara are all cities.";

sentence.matchAll(regex).forEach(match => console.log(match));
// spread syntax practice
let matches = [...sentence.matchAll(regex)];
console.log(matches[0]);
console.log(matches[1]);
console.log([...("Meow".matchAll(regex))]); // empty iterator returned - not falsy!

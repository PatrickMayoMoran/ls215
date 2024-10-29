/*
  match is a string method that takes a regex argument
  match returns null or an array depending on whether or not there's a match
  if the global flag is not set, the first match is returned with info
  if the global flag is set, an array of all matches - sans info - is returned

  ALTERNATIVES:
    Instead of using match for a truthy array, just use Regex.prototype.test to
      get a true false of whether there's match
    If you need the first match with info, try exec
    If you need all the matches with info, try matchAll
*/

let regex = /santa/i;
let sentence = "Santa Cruz, Santa Clara, and Santa Barbara are cities.";

console.log(sentence.match(regex)); // [ 'Santa', *other properties* ]
console.log(sentence.match(/santa/ig)); // [ 'Santa', 'Santa', 'Santa' ]
console.log("Meow".match(regex)); // null - no matches

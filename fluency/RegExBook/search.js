/*
  search uses Regex to search for the index of the pattern in the calling string
  similar to indexOf - except indexOf takes a string argument and also can take
    an optional starting position
  search is when you need to know if the Regex exists in the string AND its position
  similar to indexOf - returns -1 if no match found
*/

let pattern = /\scruz!/;
let match = "I love to cruz!"; // 9
let noMatch = "I love Santa Cruz!"; // -1

console.log(match.search(pattern));
console.log(noMatch.search(pattern));

// using search to then show found match
pattern = /[^\w\s]/;
console.log(match[match.search(pattern)]); // !

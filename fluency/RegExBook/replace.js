/*
  replace can take a string or regex, with global or not flag
  replace with regex and global flag is only way to make multiple
  replacements with replace
*/

let regex = /santa/ig;
let sentence = "Santa Barbara, Santa Cruz, and Santa Clara are all cities.";

console.log(sentence.replace(regex, "The"));
// The Barbara, The Cruz, and The Clara are all cities.

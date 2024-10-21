/*
charAt takes an integer and returns the character at that index point
  - If index is out of bounds, returns empty string
  - will try and convert argument given to integer
*/
let word = "Branciforte";
console.log(word.charAt(0)); // B
console.log(word.charAt(50)); // ''
console.log(word.charAt("Meow")); // B - converts meow to integer 0
console.log(word.charAt(undefined)); // B - converts undefined to integer 0

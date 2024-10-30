/*
  slice returns a new string
  it takes a start index and an optional end index
  if start is greater than length of string, empty string returned
  if start is negative, counts from end of string back
  if just start index, goes from this to end
  if no start index, assumed to be 0 and copies whole string
*/

let cat = "tiny cat";
console.log(cat.slice()); // tiny cat
console.log(cat.slice(5)); // cat
console.log(cat.slice(5, -1)); // ca - up to , but not including end index
console.log(cat.slice(-2, -1)); // a
console.log(cat.slice(30,-4)); // '' - empty string
console.log(cat.slice(-5, 8)); // y cat

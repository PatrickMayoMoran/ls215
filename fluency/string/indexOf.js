/*
  indexOf returns the starting index of the search term where found in the calling string
  if search term is not found, indexOf returns -1
  arguments are coerced into strings
  optional second argument is starting position for the search
  if an empty string is searched, it is "found" at the beginning of the string
  if empty string + starting position in range, "found" at starting position
  if empty string + starting position out of range, "found" at length
*/

let santaSnuz = "In Cruz, I like to Snuz and Snuz I shall in Cruz";

console.log(santaSnuz.indexOf("Snuz")); // 19
console.log(santaSnuz.indexOf("Snuz", 19)); // 19
console.log(santaSnuz.indexOf("Snuz", santaSnuz.indexOf("Snuz") + 1)); // 28
// counting occurrences with indexOf
let countTerm = (string, term) => {
  let count = 0;
  let index = string.indexOf(term);

  while (index !== -1) {
    count += 1;
    index = string.indexOf(term, index + 1);
  }

  return count;
}

console.log(countTerm(santaSnuz, "Snuz")); // 2

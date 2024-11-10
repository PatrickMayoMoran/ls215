function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }
  return substrings;
}

function substrings(string) {
  let substrings = [];
  for (let i = 0; i < string.length; i += 1) {
    substrings.push(leadingSubstrings(string.slice(i)));
  }
  return substrings.flat();
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

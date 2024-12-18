function leadingSubstrings(string) {
  let substrings = [];
  for (let i = 0; i < string.length; i += 1) {
    substrings.push(string.slice(0, i + 1));
  }

  return substrings;
}
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

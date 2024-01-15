function isAllUnique(string) {
  let seen = {};
  let lowerString = string.toLowerCase();

  for (let i = 0; i < lowerString.length; i += 1) {
    let character = lowerString[i];
    if (character === ' ') {
      continue;
    }

    if (seen[character]) {
      return false;
    } else {
      seen[character] = true;
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true

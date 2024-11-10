function swapCase(string) {
  let swappedString = '';
  for (let i = 0; i < string.length; i += 1) {
    let currentCharacter = string[i];
    if (/[^a-z]/i.test(currentCharacter)) {
      swappedString += currentCharacter;
      continue;
    } else if (currentCharacter === currentCharacter.toUpperCase()) {
      swappedString += currentCharacter.toLowerCase();
    } else {
      swappedString += currentCharacter.toUpperCase();
    }
  }
  return swappedString;
}
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

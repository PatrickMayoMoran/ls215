function doubleConsonants(string) {
  let consonants = /[b-df-hj-np-tv-z]/;

  let newString = '';
  let lowerString = string.toLowerCase();

  for (let i = 0; i < string.length; i += 1) {
    if (consonants.test(lowerString[i])) {
      newString += string[i] + string[i];
    } else {
      newString += string[i];
    }
  }

  return newString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

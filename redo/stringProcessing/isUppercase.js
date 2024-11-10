function isUppercase(text) {
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] !== text[i].toUpperCase()) return false;
  }
  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

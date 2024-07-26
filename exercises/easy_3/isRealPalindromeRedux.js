function isRealPalindrome(string) {
  string = onlyAlphaNumeric(string);
  console.log(string);
  return string.toLowerCase() === string.split('').reverse().join('').toLowerCase();
}

function onlyAlphaNumeric (string) {
  let alphaNumerics = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i]) || isNumber(string[i])) {
      alphaNumerics += string[i];
    }
  }

  return alphaNumerics;
}

function isLetter(c) {
  return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

function isNumber(c) {
  return c >= '0' && c <= '9'
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

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

function palindromes(string) {
  let unfiltered = substrings(string);
  return unfiltered.filter(string => {
    return (string.length > 1 && string.split('').reverse().join('') === string);
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

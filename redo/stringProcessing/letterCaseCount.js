function letterCaseCount(string) {
  let lowers = string.match(/[a-z]/g);
  let lowerCount = lowers ? lowers.length : 0;
  let uppers = string.match(/[A-Z]/g);
  let upperCount = uppers ? uppers.length : 0;
  let neithers = string.match(/[^a-z]/gi);
  let neitherCount = neithers ? neithers.length : 0;

  return {lowercase: lowerCount, uppercase: upperCount, neither: neitherCount};
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

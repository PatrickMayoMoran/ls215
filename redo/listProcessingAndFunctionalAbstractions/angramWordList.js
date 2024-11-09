/*
  GOAL: return an array of words in the input array that are anagrams of the given word

  INPUT: string, array of strings
  OUTPUT: array of strings

  RULES/EXAMPLES/QUESTIONS
    Arguments:
      Always 2 arguments? Yes
      Two arguments string and then array? Yes
      Empty arguments? Always a string, but array could be empty - return an empty array
    String argument:
      always all lower case? No, could be upper
      Case shouldn't matter
      Non alphabetic characters? No
      always just one word? yes
    Array argument:
      elements always strings? Yes
      sparse elements? no
      Case doesn't matter
      Non alphabetic characters? no
      more than one word in a string? No
      strings are alphabetic characters only? Yes

  DATA STRUCTURES AND ALGORITHM
    What kind of problem is this?
      filter - array of words that are anagrams
    What helper functions would I like?
      isAnagram - true or false whether two words are anagrams
        split words by letters, sort, and rejoin into
          a normalized word
        compare sorted version of each word
        return whether or not they're equal

    return filter of words that are anagrams of given word

*/
function isAnagram(word1, word2) {
  let normal1 = word1.split('').sort().join('');
  let normal2 = word2.split('').sort().join('');
  return normal1 === normal2;
}
function anagram(word, list) {
  return list.filter(w => isAnagram(w.toLowerCase(), word.toLowerCase()));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('LisTen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('meow', [])); // []
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" 

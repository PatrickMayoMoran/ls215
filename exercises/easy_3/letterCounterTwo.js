// GOAL: Given a string with one or more space separated words,
//       return an object with the number of words of each size

// INPUT: string
// OUTPUT: object 

// RULES
//  Always be given a string
//  Empty string returns empty object
//  Anything not a space counts as part of a word
//  Yes, order of properties in return object matters - smallest to largest size

// DATA STRUCTURES/ALGORITHM
//  Reduction problem - reduce array of strings down to an object with counts of their sizes

// MAIN ALGORITHM
//  Create array of words, separated by spaces
//  Reduce array down to an object
//    if count of word length exists, add 1
//    if count of word length does not exist, add it with 1 as starting value
//  Order object???
//  Return that object

function justLetters(word) {
  word = word.toLowerCase();
  let cleanWord = '';

  for (let i = 0; i < word.length; i += 1) {
    if ([word.length] === 0) continue;
    let letter = word[i];
    if (letter >= 'a' && letter <= 'z') cleanWord += letter;
  }

  return cleanWord;
}

function count(obj, word) {
  word = justLetters(word);
  let length = word.length;
  if (obj[length]) {
    obj[length] += 1;
  } else {
    obj[length] = 1;
  }
  return obj;
}

function wordSizes(text) {
  if (text.length === 0) return {};
  let words = text.split(' ');
  return words.reduce(count, {});
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

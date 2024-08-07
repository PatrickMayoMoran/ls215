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

function wordSizes(text) {
  let words = text.split(' ');
  let counts = {}
  if (text.length === 0) return counts;
  counts = words.reduce((counts, word) => {
    let length = word.length;
    if (counts[length]) {
      counts[length] += 1;
    } else {
      counts[length] = 1;
    }
    return counts;
  }, {});

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

function wordSizes(text) {
  let words = text.split(' ');
  let counts = {};

  for (let i = 0; i < words.length; i += 1) {
    let wordSize = words[i].length;
    if (wordSize === 0) {
      continue;
    }

    counts[wordSize] = counts[wordSize] || 0;
    counts[wordSize] += 1;
  }

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

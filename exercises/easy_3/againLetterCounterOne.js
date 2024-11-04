/*
  GOAL: Return an object with counts of the numbers of words of different sizes in the given string

  INPUT: String
  OUTPUT: Object

  EXAMPLES/RULES/QUESTIONS:
    Arguments:
      Always given one argument? Yes
      Always a string? Yes
      Empty String returns empty object
    Word:
      non space characters
      separated by spaces
      Input of other whitespace characters? No, just spaces
    Output:
      object in ascending order based on word size? Yes!

  DSA 
    What kind of problem is this?
      transformation -> map each word to its length
      reduce -> array of numbers into an object
    Helper methods I want?
      No, but maybe conversion of array to object

    ALGORITHM
      ** initialize a letter Count object
      ** if length of string is 0, return Count object 

      ** transform and save array of string sizes
      ** sort array by word size, smallest to largest
      reduce array of sizes to object of size/count pairs
        ** initial accumulator value of letter Count object
        ** if size of object already exists as a key, add one to its count
        ** if not, initialize with count of one
        ** return object for reduce function

      ** return letter Count object
*/

function wordSizes (string) {
  let letterCount = {};
  if (string.length === 0) return letterCount;

  let sizes = string.split(' ').map(w => w.length);
  sizes.sort();

  sizes.reduce( function (counts, size) {
    if (counts[size]) {
      counts[size] += 1;
    } else {
      counts[size] = 1;
    }
    return counts;
  }, letterCount);

  return letterCount;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

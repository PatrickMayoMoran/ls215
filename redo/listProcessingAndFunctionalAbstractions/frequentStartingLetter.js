/*
  GOAL: return the letter that is the most frequent starting letter of a name
  INPUT: array of names (strings)
  OUTPUT: string

  RULES/EXAMPLES/QUESTIONS
    Arguments
      ** Always a single argument? Yes
      ** Always an array? Yes
      ** Always strings? Yes
      ** Always a single word? Yes
      ** Ever be an empty array? No, always at least one name
    Strings
      ** Ever non-alphabetic characters in string? No
      ** strings in lower case, upper case, etc.? Yes, could be mixed case
      ** upper and lower case regarded as different letters? No, f and F are same
      ** ever be empty string? Yes, empty string possible
    Return
      only one letter - return the letter
      more than one letter, array of letters
      order matter for more than one letter? Yes, alphabetic

  DSA
    transformation - only care about first letter
    reduce - turn array of names into a count

    ** filter out empty strings
    ** transform strings into first letter
    reduce array to an object with letters and counts
    ?? Select largest one
*/
let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar']; // 'K'
let names2 = ['Patrick', 'Sam'] // ['P, 'S']
let names3 = ['tio', 'Terry', 'Luis', 'lollipop', '', '', 'larry']

function mostFrequentLetter(names) {
  names = names.filter(e => e.length > 0);
  let letters = names.map(e => e[0].toUpperCase());
  let result = {};
  let counts = letters.reduce((acc, letter) => {
    if (acc[letter]) {
      acc[letter] += 1;
    } else {
      acc[letter] = 1;
    }

    return acc;
  }, result);

  let mostFrequent = Object.keys(counts).reduce((acc, letter) => {
    return counts[acc] > counts[letter] ? acc : letter;
  });
  return mostFrequent;
}

console.log(mostFrequentLetter(names));
console.log(mostFrequentLetter(names2));
console.log(mostFrequentLetter(names3));

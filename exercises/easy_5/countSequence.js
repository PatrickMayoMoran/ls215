/*
  GOAL: Return an array sequence with a given starting number and a count
        of how many numbers should be in the sequence

  INPUT: two integers
  OUTPUT: array

  Examples, Rules, Questions
    Arguments:
      Count argument will always be greater than or equal to 0
      Always two arguments? yes
      Always integers? yes
      Order of arguments? Always count first, then starting number
    Return
      If count is 0, return an empty array
      each number in sequence is multiple of starting number added on

  DSA
    ** Create sequence array
    initialize nextNumber to starting argument
    loop up to the count number
      add next number to the sequence
      increment nextNumber with starting number
    return sequence array
*/

function sequence(count, start) {
  let sequence = [];
  let nextNumber = start;

  for (let i = 0; i < count; i += 1) {
    sequence.push(nextNumber);
    nextNumber += start;
  }

  return sequence;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

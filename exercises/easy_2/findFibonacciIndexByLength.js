/* Goal: Given a number representing the number of digits in a 
 * number from the Fibonacci sequence, return the index of the first number
 * in the Fibonacci sequence with that many digits
 * 
 * INPUT: BigInt
 * OUTPUT: BigInt
 *
 * RULES:
 *  EXPLICIT
 *    Index starts at 1
 *    Given number is a BigInt
 *    Return number should be a BigInt
 *
 *  IMPLICIT
 *
 *  DATA STRUCTURES
 *    Array for storing Fibonacci numbers?
 *    counter for counting index up from 1?
 *
 *  ALGORITHM
 *    Helper methods?
 *      Generate Fibonacci sequence
 *        sum last two elements of the array
 *      Check Digits
 *        INPUT: Fibo number, number of digits
 *        OUTPUT: boolean
 *
 *
 *    initialize a counter to represent the index, starting at 1
 *    initialize an array for Fibonacci numbers, starting with 1
 *
 *    Generate a number of the Fibo Sequence
 *    increment our index
 *    If the number has the number of digits in the argument, return the index
 *    repeat
 *
 *
 */

function generateNextNumber(sequence) {
  let precedingTwo = sequence.slice(-2);
  let nextNumber = precedingTwo.reduce(
    (accumulator, value) => accumulator + value,
    0
  );
  return nextNumber;
}

function findFibonacciIndexByLength(numberOfDigits) {
  let index = 1;
  let fibonacciSequence = [1];
  let currentNumber = fibonacciSequence[0];

  let correctLength = hasLength(currentNumber, numberOfDigits);

  if (correctLength) {
    return index;
  } else {

  return generateNextNumber(fibonacciSequence);
}

console.log(findFibonacciIndexByLength(1n)) // === 1n);
console.log(findFibonacciIndexByLength(2n)) // === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n)) // === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

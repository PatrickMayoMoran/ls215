function reverseNumber(inputNumber) {
  return parseInt(inputNumber.toString().split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1

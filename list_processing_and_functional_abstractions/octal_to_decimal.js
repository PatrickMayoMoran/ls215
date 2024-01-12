function octalToDecimal(numberString) {
  let stringDigits = numberString.split('').reverse();
  let octalDigits = stringDigits.map( digit => Number(digit));
  let octalValue = octalDigits.map(calculateOctalValue);
  let decimalValue = octalValue.reduce((sum, number) => sum + number, 0);
  return decimalValue;
}

function calculateOctalValue(number, power) {
  return number * (8**power);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

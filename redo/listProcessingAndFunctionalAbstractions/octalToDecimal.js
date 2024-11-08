/*
  GOAL: Return the base 10 version of the number represented by the octal string

  INPUT: string of an octal number
  OUTPUT: integer

  RULES/EXAMPLES/QUESTIONS
    Arguments
      Always a string? yes
      More than one string? No,
      No arguments? No
      Always one string? Yes
      No other data types for argument? No
    Octal String
      Always be a valid octal number? No - return undefined
      Valid Octal? only digits 0-7
      empty string? yes - return undefined

    Return Value
      integer or undefined

  DATA STRUCTURES ALGORITHM
    What kind of problem is this?
      transformation - turn octal into decimal number
      reduce - sum all decimals together
    What helper methods?
      validOctalString
        one or more of digits 0-7

  Conversion:
  011 -> 0 * 8^ 3 + 1 * 8^1 + 1 * 8^0
  ALGORITHM
    ** If not a valid octal, return undefined
    transform octal numbers into decimal numbers, store in an array
        ** split string into digits and store in stringDigits
      ** transform stringDigits into octalDigits, store in octalDigits array
      transform octalDigits array into decimal values array
        ** initialize current power to length of array minus current index minus 1
        ** digit multiplied by 8 to the current power

    reduce and return sum of the array

    VALIDATE EXAMPLE
    '011'
    ['0', '1', '1'] stringDigits
    [0, 1, 1] octalDigits
    [0, 8, 1] decimalDigits
    9

*/
function octalToDecimal(numberString) {
  if (!validOctal(numberString)) return undefined;
  let stringDigits = numberString.split('');
  let octalDigits = stringDigits.map(n => Number(n));
  let decimalValues = octalDigits.map((octal, index) => {
    let currentPower = octalDigits.length - index - 1;
    return octal * (8**currentPower);
  });

  return decimalValues.reduce((total, number) => total + number);
}

function validOctal(string) {
  let valid = /^[0-7]+$/;
  return valid.test(string);
}

console.log(octalToDecimal('1') )//=== 1);           // 1
console.log(octalToDecimal('') )//=== undefined);           // undefined
console.log(octalToDecimal('cat') )//=== undefined);        // undefined
console.log(octalToDecimal('94') )//=== undefined);         // undefined
console.log(octalToDecimal('99') )//=== undefined);         // undefined
console.log(octalToDecimal('10') )//=== 8);          // 8
console.log(octalToDecimal('130') )//=== 88);         // 88
//            64 + 24 + 0
console.log(octalToDecimal('17') )//=== 15);          // 15
//              8 + 7
console.log(octalToDecimal('2047') )//=== 1063);        // 1063
//            1024 + 0 + 32 + 7
console.log(octalToDecimal('011') )//=== 9);         // 

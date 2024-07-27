// GOAL: given a floating point number between 0 and 360 inclusive, return 
// a string representing it in degrees, minutes, and seconds

// INPUT: floating point number
// OUTPUT: string

// RULES:
//  Always returning minutes and seconds with two digits
//  will always be given floating point number between 0 and 360
//  rounding method does not matter

// DATA STRUCTURES
//  
// ALGORITHM
//  - store degrees, then calculate minutes
//  - store minutes, then calculate seconds
//
//  degrees is integer value of starting number
//  minutes is the remainder of starting number mod 1 times 60
//  minutes value is integer value of minutes
//  seconds is the remainder of minutes mod 1 times 60
//  seconds gets rounded to 2 decimal places
//  string is degrees, degree symbol, minutes, seconds

const DEGREE = '\u00B0';

function dms(number) {
  number = number % 360;
  let degrees = parseInt(number);
  let minutesValue = number % 1 * 60;
  let minutes = String(parseInt(minutesValue)).padStart(2, 0);
  let secondsValue = minutesValue % 1 * 60;
  let seconds = String(parseInt(secondsValue)).padStart(2, 0);
  return `${degrees}${DEGREE}${minutes}'${seconds}"`
}

// All test cases should return true
console.log(dms(400) === "40°00'00\"");
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");

function century (year) {
  let century = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    century -= 1;
  }

  return String(century) + centurySuffix(century)
}

const catchWithTh = (lastTwo) => lastTwo === 11 || lastTwo === 12 || lastTwo === 13;

function centurySuffix(century) {
  if (catchWithTh(century % 100)) {
    return 'th';
  }

  let lastDigit = century % 10;
  switch (lastDigit) {
    case 1: return 'st'
    case 2: return 'nd'
    case 3: return 'rd'
    default: return 'th'
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

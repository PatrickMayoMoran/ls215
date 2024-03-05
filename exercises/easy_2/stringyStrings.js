function stringy(number) {
  let string = '';
  let oneOrZero = '1';

  for (i = 0; i < number; i += 1) {
    string += oneOrZero;
    oneOrZero = flip(oneOrZero);
  }

  return string;
}

function flip(oneOrZero) {
  return oneOrZero === '1' ? '0' : '1';
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(2));
console.log(stringy(0));

function twice(number) {
  if (isDoubler(number)) return number;

  return number * 2;
}

function isDoubler(number) {
  let string = String(number);
  if (string.length % 2 === 1) return false;

  let half = string.length / 2;
  // let reversed = string.slice(-half).split('').sort((a,b) => -1).join('');
  return string.slice(half) === string.slice(0,half);
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

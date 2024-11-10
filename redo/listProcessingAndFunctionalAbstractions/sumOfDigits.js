function sum(number) {
  return String(number).split('').map(d => Number(d)).reduce((t, n) => t +n);
}
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

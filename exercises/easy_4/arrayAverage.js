function average(array) {
  let sum = array.reduce((a, c) => { // arrow function syntax
//let sum = array.reduce( function (a,c) { ---- anonymous function syntax
    return a + c
  }, 0);
  // console.log(Math.max(...array)); - practicing Math.max with unpacked array
  return Math.floor(sum / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

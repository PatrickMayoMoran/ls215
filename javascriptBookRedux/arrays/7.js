function sumOfSquares(array) {
  return array.reduce((acc, num) => acc + num * num, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

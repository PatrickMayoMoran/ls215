function lowestElement(arr, xCoord, yCoord) {
  if (arr.length === 0 || arr[0].length === 0
      || xCoord >= arr.length || yCoord >= arr.length
      || xCoord < 0 || yCoord < 0) {
      return 'Invalid input';
  }

  let neighbors = [];

  for (let row = xCoord - 1; row <= xCoord +1; row += 1) {
    for (let col = yCoord - 1; col <= yCoord +1; col += 1) {
      if (arr[row] && arr[row][col]) {
      neighbors.push(arr[row][col]);
      }
    }
  }

  neighbors = neighbors.filter(elem => elem !== -Infinity);
  return Math.min(...neighbors);
}
console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1)  === 1);

console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0)  === -1);

// invalid coordinate -> null
console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], -1, 0)  === 'Invalid input');

// if -Infinities are present, return next lowest whole number
console.log(lowestElement([
  [-Infinity, 8, 7],
  [-Infinity, -1, -3],
  [-5, -9, 54]
], 1, 1)  === -9);

// first array argument is empty -> return null
console.log(lowestElement([], 0, 0)  === 'Invalid input');

// first array argument is empty -> return null
console.log(lowestElement([[]], 0, 0)  === 'Invalid input');

// first array argument single element - return value
console.log(lowestElement([[5]], 0, 0)  === 5);

// duplicate lowest values -> just return one;
console.log(lowestElement([
  [-9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 1, 0)  === -9);

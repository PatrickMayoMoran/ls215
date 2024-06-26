/*

Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.
arr, x, y
arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).

x will hold the row coordinate, while y will hold the column coordinate.

You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.

Understanding the Problem

Input:
-> nested array of numbers
-> number (x coordinate)
-> number (y coordinate)

Output: number (representing the lowest neighbor)

Rules:

- A 'neighbor' is any value that is horizontal, vertical, diagonal from the coordinate value
- If there's no value lower than the coordinate value, return the coordinate value
-> x coordinate is the row (the nested array)
-> the y coordinate is the column (the element in the nested array)
-> same row === anything in the same nested array
-> same column === any coordiante with the same y value

-> diagonal co-ordiantes have the same abosolutue differece between x,y co-ords

Questions:

(less, more, different) || empty

1. Would we ever be given more or less than 3 arguments? -> no, always the right number of args

2. argument types will always be nested array, integers

3. Coordinate type: could be given an invalid coordinate, if so return null

4.  What will array size be like? -> Always a square
    Valid coordinates must be greater than 0 and less than array argument size

5. What number types can we expect in the matrix? Valid integers OR Infinity/-Infinity

6. What if there is a tie for lowest neighbor? -> could be duplicates of lowest neighbor, just return one number

7. What if -Infinity is a neighbor? -> Don't return it, return next lowest whole number

8. What if first array argument is empty? -> return null

Examples / Test Cases

Data Structures
  array of valid neighbor coordinates
  array of neighbors

Algorithm
  What kind of problem is this?
    Selection:
      Selecting the neighbors
      Selecting the lowest
  Helper methods:
    check for valid inputs
    check for invalid coordinates
      INPUT
    Check for invalid inputs:
      INPUT: matrix, x, y
      OUTPUT: boolean
      return null if first array argument is empty
      return null if first array argument has a nested array that is empty
      return null if it's an invalid coordinate
        x or y are less than 0
        x or y are greater than the size of the matrix
    generateNeighborCoordinates
      INPUT: matrix size, x, y
        create neighborCoordinates array
        iterate from x - 1 to x + 1:
          iterate from y - 1, y + 1
            if x and y are greater than 0 AND
               x and y are less than matrix size,
               add x, y to neighbor coordinates
        return neighbor coordinates

  Main Algorithm
    Return null if inputs are invalid
    generate save in an all possible neighbor coordinates
    transform coordinates to matrix values
    filter out -Infinity from matrix values
    sort matrix values
    return first matrix value

*/
function invalidInputs(matrix, x, y) {
  if (matrix.length === 0 || matrix[0].length === 0) return true;
  if (x < 0 || y < 0) return true;
  let size = matrix.length;
  if (x > size || y > size) return true;

  return false;
}

function generateNeighborCoordinates(size, x, y) {
  let neighborCoordinates = [];

  for (let newX = x - 1; newX <= x + 1; newX += 1) {
    for (let newY = y - 1; newY <= y + 1; newY += 1) {
      if (newX >= 0 && newY >= 0 && newX < size && newY < size) {
        neighborCoordinates.push([newX, newY]);
      }
    }
  }

  return neighborCoordinates;
}

function lowestElement(matrix, x, y) {
  if (invalidInputs(matrix, x, y)) return null;

  let neighborCoordinates = generateNeighborCoordinates(matrix.length, x, y);
  let neighbors = neighborCoordinates.map(c => matrix[c[0]][c[1]]);
  neighbors = neighbors.filter(v => v !== -Infinity);
  neighbors = neighbors.sort(v => parseInt(v));
  return neighbors[0];
}

console.log(lowestElement([
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
], 1, 1)  === 1)

console.log(lowestElement([
[9, 8, 7],
[0, -1, -3],
[-5, -9, 54]
], 0, 0)  === -1)

// invalid coordinate -> null
console.log(lowestElement([
[9, 8, 7],
[0, -1, -3],
[-5, -9, 54]
], -1, 0)  === null)

// if -Infinities are present, return next lowest whole number
console.log(lowestElement([
[-Infinity, 8, 7],
[-Infinity, -1, -3],
[-5, -9, 54]
], 1, 1)  === -9)

// first array argument is empty -> return null
console.log(lowestElement([], 0, 0)  === null)

// first array argument is empty -> return null
console.log(lowestElement([[]], 0, 0)  === null)

// first array argument single element - return value
console.log(lowestElement([[5]], 0, 0)  === 5)

// duplicate lowest values -> just return one 
console.log(lowestElement([
[-9, 8, 7],
[0, -1, -3],
[-5, -9, 54]
], 1, 0)  === -9)

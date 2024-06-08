/*

Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.

arr, x, y

arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).

x will hold the row coordinate, while y will hold the column coordinate.

You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.

Examples

lowestElement([
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
], 1, 1) ➞ 1

[
[1, 2, 3]
[4, 5, 6] // (1, 1) holds the integer 5. Check the surrounding neighbors.
[7, 8, 9]
]

lowestElement([

[9, 8, 7],
[0, -1, -3],
[-5, -9, 54]
], 0, 0) ➞ -1
[
[9, 8, 7] // (0, 0) holds the integer 9. Check the surrounding neighbors.
[0, -1, -3]
[-5, -9, 54]
]
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

3. **Coordinate type: could be given an invalid coordinate, if so return null

4. ** What will array size be like? -> Always a square

5. ** What number types can we expect in the matrix? Valid integers OR Infinity/-Infinity

6. ** What if there is a tie for lowest neighbor? -> could be duplicates of lowest neighbor, just return one number

7. ** What if -Infinity is a neighbor? -> Don't return it, return next lowest whole number

8.** What if first array argument is empty? -> return null

Examples / Test Cases

Data Structures

Algorithm

*/

console.log(lowestElement([

[1, 2, 3],
[4, 5, 6],
[7, 8, 9]

], 1, 1) === 1)

console.log(lowestElement([

[9, 8, 7],
[0, -1, -3],
[-5, -9, 54]

], 0, 0) === -1)

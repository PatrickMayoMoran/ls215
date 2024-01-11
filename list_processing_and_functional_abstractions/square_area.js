
// 1: Transform array to array of areas
// 2: Reduce down to sum of total

function calculateArea(length, width) {
  return length * width;
}

function totalArea(rectangles) {
  let areas = rectangles.map( rectangle => calculateArea(...rectangle));
  let total = areas.reduce((total, area) => total + area);
  return total;
}

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121

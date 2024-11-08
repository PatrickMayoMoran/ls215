function totalSquareArea(rectangles) {
  let squares = rectangles.filter(([h, w]) => h === w);
  let areas = squares.map(([h,w]) => h * w);
  return areas.reduce((total, area) => total + area);
}
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121

/*
  GOAL: write a function, total Area, that returns the sum of all the areas
    of each rectangle in a given array 

  INPUT: Array of subarrays
  OUTPUT: integer

  RULES/EXAMPLES/QUESTIONS 
    Arguments:
      Given argument always an array? Yes
      Empty array as argument? Yes, return 0 as total area
      Multiple arguments, ie multiple rectangle arrays, provided? No, only one
      Could array argument be sparse? no
      Only rectangle subarrays or other arguments in there? only rectangle subarrays
    Sub arrays:
      Always valid rectangles, ie two positive integers? Yes
      empty? Yes, ignore
      Other kinds of elements? No
      Negative integers, 0, infinity/NaN? No
      Would there ever be more than two integers? No
    Return:
      Integer sum of areas

  DATA STRUCTURES ALGORITHM
    What kind of problem is this?
      reduce problem - turn array of rectangles into a single number
      mapping problem - turn rectangles into their areas
      filter - only valid rectangles should be computed
    Are there any helper methods I'd like to make?
      No

    ** if array length is 0, return 0
    ** filter out empty rectangles, store valid rectangles in an array
    ** transform rectangles to their area, store areas in an array
    reduce array of areas to total area and return

*/

function totalArea(rectangles) {
  if (rectangles.length === 0) return 0;
  let validRectangles = rectangles.filter(rec => rec.length === 2);
  let areas = validRectangles.map(([h, w]) => h * w);
  return areas.reduce((total, area) => total + area);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
                  // 12      36      8      81      4

console.log(totalArea(rectangles));    // 141
console.log(totalArea([])); // 0
console.log(totalArea([[1,1], [], [2,3]])); // 7

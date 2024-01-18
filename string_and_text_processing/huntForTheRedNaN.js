let huntForTheRedNaN = [1, NaN, 3];
console.log(huntForTheRedNaN.indexOf(NaN)); // -1: can't identify it
console.log(huntForTheRedNaN.includes(NaN)); // true!

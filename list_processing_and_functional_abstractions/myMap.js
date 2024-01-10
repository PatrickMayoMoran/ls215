function myMap(array, func) {
  let mapped = [];

  array.forEach((element, index, array) => {
    let newElement = func(element, index, array);
    mapped.push(newElement);
  });

  return mapped;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

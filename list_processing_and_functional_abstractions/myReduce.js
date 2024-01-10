function myReduce(array, func, initial) {
  let result = initial ? initial : array[0];

  if (initial) {
    array.forEach((element, index, array) => {
      result = func(result, element);
    });
  } else {
    for (let i = 1; i < array.length; i += 1) {
      let element = array[i];
      result = func(result, element);
    }
  }

  return result;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

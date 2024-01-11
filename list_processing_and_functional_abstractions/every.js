function myOwnEveryOption(array, func) {
  array.forEach((element, index, array) => {
    let falsy = !(func(element, index, array));
    if (falsy) return false;
  });
  return true;
}

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    let element = array[i];
    let falsy = !func(element, i, array);
    if (falsy) return false;
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery([], isAString)); // true for empty arrays/vacuous truths

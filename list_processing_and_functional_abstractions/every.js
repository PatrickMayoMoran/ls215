function myOwnEvery(array, func) {
  array.forEach((element, index, array) => {
    let falsy = !(func(element, index, array));
    if (falsy) return false;
  });
  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery([], isAString)); // true for empty arrays/vacuous truths

// return true if EVERY element returns true for the callback function
function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (func(array[i]) === false) return false;
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery(['a', 4], isAString));                    // false

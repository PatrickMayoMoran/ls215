function myOwnEvery(array, func) {
  // ...
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true

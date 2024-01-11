function myOwnSome(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    let element = array[i];
    let truthy = func(element);
    if (truthy) return true;
  }

  return false;
}

let isAString = value => typeof value === 'string';
console.log(myOwnSome(['a', 5, 'a234', '1abc'], isAString));       // true
console.log(myOwnSome([], isAString)); // false, there exists - must be an element to return true; empty array means there is no 'some'
console.log(myOwnSome([1, 2, 3], isAString)); // no elements satisfy condition

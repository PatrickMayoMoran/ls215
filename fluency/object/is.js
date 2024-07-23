// Object.is
// tests if two values are the same
// NaN is NaN
// -0 is not 0
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is("cat", "cat")); // true
console.log(Object.is(-0, -0)); // true
console.log(Object.is(-0, 0)); // false
console.log(Object.is({}, {})); // false

function doubleObjectValues(object) {
  let entries = Object.entries(object);
  let doubled = entries.map(([key, value]) => [key, value * 2]);
  return Object.fromEntries(doubled);
}

console.log(doubleObjectValues({a: 1, b: 2, c: 3}));

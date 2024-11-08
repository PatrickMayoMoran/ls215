function keepEvenValues(object) {
  let entries = Object.entries(object);
  let objectFiltered = entries.filter(([k, v]) => v % 2 === 0);
  return Object.fromEntries(objectFiltered);
}

console.log(keepEvenValues({a: 1, b: 2, c: 3, d: 4, e: 5}));

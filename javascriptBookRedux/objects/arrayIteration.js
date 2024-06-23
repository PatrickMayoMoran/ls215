let test = ["Tiny","Cat","Rules"];
let testEntries = Object.entries(test);
let testKeys = Object.keys(test);
let testValues = Object.values(test);

testEntries.forEach(entry => {
  console.log(`Array entry of index and value: ${entry}`);
});

testKeys.forEach(key => {
  console.log(`Array index of: ${key}`);
});

testValues.forEach(value => {
  console.log(`Array element of ${value}`);
});

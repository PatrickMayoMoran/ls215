let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let upperCaseKeys = Object.keys(obj)

upperCaseKeys.forEach((key, i, array) => {
  array[i] = key.toUpperCase();
});

console.log(upperCaseKeys);

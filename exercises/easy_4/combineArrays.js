function union (...args) {
  let resultArray = [];

  args.forEach(array => copyNonDups(resultArray, array));

  return resultArray;
}

function copyNonDups (resultArray, array) {
  array.forEach(e => {
    if (!resultArray.includes(e)) resultArray.push(e);
  });

  return resultArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

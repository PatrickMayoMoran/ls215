function union (arrayOne, arrayTwo) {
  arrayTwo.forEach(e => {
    if (!arrayOne.includes(e)) arrayOne.push(e);
  });

  return arrayOne;
}
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

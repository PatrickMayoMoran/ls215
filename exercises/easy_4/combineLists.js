function interleave(arrayOne, arrayTwo) {
  let interleaved = [];
  
  for (let i = 0; i < arrayOne.length; i += 1) {
    interleaved.push(arrayOne[i], arrayTwo[i]);
  }

  return interleaved;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

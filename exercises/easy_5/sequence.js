function sequence(number) {
  let upCounted = [];
  for (let i = 1; i <= number; i += 1) {
    upCounted.push(i);
  }

  return upCounted;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
console.log(sequence(1));    // [1]

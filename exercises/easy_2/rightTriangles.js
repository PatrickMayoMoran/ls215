function triangles(size) {
  for (let stars = '*'; stars.length <= size; stars += '*') {
    console.log(stars.padStart(size, ' '));
  }
}

triangles(5);
triangles(9);

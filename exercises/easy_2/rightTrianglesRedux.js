function triangles (height) {
  let stars = 1;
  let spaces = height - 1;

  for (let i = 0; i < height; i += 1) {
    console.log(repeat(' ', spaces) + repeat('*', stars));
    stars += 1;
    spaces -= 1;
  }
}

function repeat (character, times) {
  let string = '';
  for (let i = 0; i < times; i += 1) {
    string += character;
  }

  return string;
}

triangles(5);
triangles(9);

function repeatCharacter(character, times) {
  let repeated = '';
  for (i = 0; i < times; i += 1) {
    repeated += character;
  }

  return repeated;
}

console.log(repeatCharacter("Tiny", 5));

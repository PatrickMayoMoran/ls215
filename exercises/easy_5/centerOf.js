function centerOf(string) {
  if (isOdd(string.length)) {
    return string[Math.floor(string.length/2)];
  } else {
    return string.substring((string.length/2) - 1,(string.length/2) + 1);
  }
}

function isOdd(number) {
  return (number % 2 === 1);
}

console.log(centerOf('I Love JavaScript')); // "a"
centerOf('Launch School');     // " "
console.log(centerOf('Launch'));            // "un"
centerOf('Launchschool');      // "hs"
console.log(centerOf('x'));                 // "x"

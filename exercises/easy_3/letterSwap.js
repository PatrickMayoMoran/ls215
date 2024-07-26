function swap(text) {
  return text.split(' ').map(swap2).join(' ');
}

function swap2(text) {
  if (text.length === 1) return text;
  let newEnd = text[0];
  let newStart = text[text.length - 1];
  let middle = text.slice(1, text.length - 1);

  return newStart + middle + newEnd;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

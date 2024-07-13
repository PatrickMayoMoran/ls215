function allMatches(words, regEx) {
  let matches = [];
  words.forEach(word => {
    if (regEx.test(word)) {
      matches.push(word);
    }
  });

  return matches;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

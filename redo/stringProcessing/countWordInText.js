let text = "The quick brown fox jumps over the lazy dog."

function countWordInText(word, text) {
  let words = text.split(' ');
  let lettersOnly = words.map(word => word.replace(/[^a-z]/gi, ''));
  return lettersOnly.filter(w => w.toLowerCase() === word.toLowerCase()).length;
}

console.log(countWordInText('the', text));

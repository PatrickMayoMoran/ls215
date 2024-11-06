function reverseWords(sentence) {
  return sentence.split(' ').map(w => flipBig(w)).join(' ');
}

function flipBig(word) {
  if (word.length < 5) return word;
  return word.split('').reverse().join('');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

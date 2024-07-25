function cleanUp (text) {
  let cleanText = '';

  for (let i = 0; i < text.length; i += 1) {
    if (isLowerCase(text[i]) || isUpperCase(text[i])) {
      cleanText += text[i];
    } else if ( i === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

const lastChar = (text) => text[text.length - 1];
const isLowerCase = (letter) => letter >= 'a' && letter <= 'z';
const isUpperCase = (letter) => letter >= 'A' && letter <= 'Z';

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

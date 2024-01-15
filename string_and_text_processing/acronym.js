function acronym(string) {
  let words = string.match(/\w+/g);
  return words.reduce((acronym, word) => acronym + word[0].toUpperCase(), '');
}

function otherAcronym(string) {
  let normalized = string.replaceAll(/-/g, ' ').split(' ');
  let upperChars = normalized.map(word => word[0].toUpperCase());
  return upperChars.join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"
console.log(otherAcronym('Portable Network Graphics'));                  // "PNG"
console.log(otherAcronym('First In, First Out'));                        // "FIFO"
console.log(otherAcronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(otherAcronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(otherAcronym('Hyper-text Markup Language'));                 // "HTML"

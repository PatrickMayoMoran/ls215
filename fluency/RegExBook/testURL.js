function isUrl (link) {
  let validURL = /^https?:\/\/\S+$/;
  return validURL.test(link);
}

console.log(isUrl('https://launchschool.com'));   // -> true
console.log(isUrl('http://example.com'));         // -> true
console.log(isUrl('https://example.com hello'));  // -> false
console.log(isUrl('   https://example.com'));     // -> false


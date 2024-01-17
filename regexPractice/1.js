function isUrl(url) {
  let validURL = /^https?:\/\/\S*$/
  return validURL.test(url);
}

console.log(isUrl('https://launchschool.com'));   // -> true
console.log(isUrl('http://example.com'));         // -> true
console.log(isUrl('https://example.com hello'));  // -> false
console.log(isUrl('   https://example.com'));     // -> false

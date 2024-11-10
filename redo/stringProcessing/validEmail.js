/*
  RULES:
    must be one @ sign in the middle
    first part is one or more letters or digits
    capitalization of letters doesn't matter, so can use i flag
    domain part is two or more components with dot in between
    each component is only letters
*/
function isValidEmail(email) {
  let validEmailRegEx = /^[a-z0-9]+@([a-z]+\.[a-z]+)+$/i
  return validEmailRegEx.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns fals

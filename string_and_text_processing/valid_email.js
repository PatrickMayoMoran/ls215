function isValidEmail(email) {
  let validEmail = /^[A-Za-z0-9]+@[A-Za-z]+(\.[A-Za-z]+)+$/;
  validEmail.test(email);
  // original solution - coercion of match result to boolean equivalent
  // let match = email.match(validEmail);
  // return !!match;
  let globalValidEmail = /^[A-Za-z0-9]+@[A-Za-z]+(\.[A-Za-z]+)+$/g;
  // ALWAYS ZERO - haven't run a test yet
  // console.log(globalValidEmail.lastIndex);
  let match = globalValidEmail.test(email);
  console.log(globalValidEmail.lastIndex); // MAY have a value
  let noMatch = globalValidEmail.test(email); // ALWAYS false - searching rest of the string
  return match;
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
console.log(isValidEmail('foo@bar.....com'));         // returns false

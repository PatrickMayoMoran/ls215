// ? is lazy quantifier coming after another quantifier
// So, the + means one or more of any character, but then as few as possible
// even just one character!
let pattern = /.+?/;

let empty = '';
let full = "In the merry month of May";

// match returns null or a single match
console.log(empty.match(pattern));
console.log(full.match(pattern));

// matchAll returns iterable object
// match returns array of matches
pattern = /.+?/g;
console.log(full.matchAll(pattern));
console.log(full.match(pattern));

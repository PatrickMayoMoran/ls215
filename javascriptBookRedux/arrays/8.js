// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.
// reduce
//  empty array as accumulator
//  if length of element is odd, push to acc
function oddLengths(arr) {
  return arr.reduce((acc, e) => {
    if (e.length % 2 !== 0) acc.push(e.length);
    return acc;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

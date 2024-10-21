/*
  String returns primitive values of type string based on the argument
  only thing that can handle converting symbols to string without error
  can be used as a constructor to create objects
*/

console.log(String("meow"));
console.log(String(55));
console.log(String(55) instanceof Object); // false, not a string object
console.log(String(undefined)); // String can handle undefined, unlike toString
console.log(String(null)); // String can handle null, unlike toString

/*
  replace returns a new string with the search string replaced
  can take either regex or string args
*/

let tiny = "tiny cat";
console.log(tiny.replace("meow", "not here")); // tiny cat - nothing to replace
console.log(tiny.replace("t", "m")); // miny cat - only first match replaced
console.log(tiny.replace(/t/, "m")); // miny cat - no global flag
console.log(tiny.replace(/t/g, "m")); // miny cam - both replaced

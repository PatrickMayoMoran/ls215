/*
  substring gives you a subsection or copy of the string
  only takes arguments greater than or equal to 0
  will swap arguments if end is less than beginning (difference from slice)
  treats all negative as 0
*/

let cat = 'tiny cat';
console.log(cat.substring()); // 'tiny cat'
console.log(cat.substring(5)); // 'cat'
console.log(cat.substring(-10)); // 'tiny cat'
console.log(cat.substring(5, cat.length)); // cat
console.log(cat.substring(5, 7)); // ca - doesn't include ending index
console.log(cat.substring(5, 2)); // ny 

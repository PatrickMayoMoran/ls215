let array = [1, 2, 3, 4, 5];

for (let i = 0; i <= (Math.floor(array.length / 2)); i += 1) {
  let a = array[i];
  let b = array[array.length - i - 1]
  array[i] = b;
  array[array.length - i - 1] = a;
}

console.log(array);

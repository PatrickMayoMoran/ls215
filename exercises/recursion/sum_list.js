function sumList (list) {
  if (list.length == 0) {
    return 0;
  } else {
    console.log(list.slice(1));
    return list[0] + sumList(list.slice(1));
  }
}

let list = [1, 2, 3, 4, 5];
console.log(sumList(list));

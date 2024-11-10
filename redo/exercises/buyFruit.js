/*
function buyFruit(list) {
  return list.reduce((groceryList, item) => {
    let quantity = item[1];
    let fruit = item[0];
    for (let i = 0; i < quantity; i += 1) {
      groceryList.push(fruit);
    }
    return groceryList;
  }, []);
}
*/

function buyFruit(fruitsList) {
  return fruitsList.map(item => repeat(item))
            .reduce((grocery, fruit) => grocery.concat(fruit));
}

function repeat(item) {
  let quantity = item[1];
  let fruit = item[0];
  let result = [];

  for (let i = 0; i < quantity; i += 1) {
    result.push(fruit);
  }

  return result;
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"

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
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"

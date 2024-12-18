const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({id}) => id === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  let itemTransactions = transactionsFor(inventoryItem, transactions);
  let inTransactions = itemTransactions.filter(({movement}) => movement === 'in');
  let outTransactions = itemTransactions.filter(({movement}) => movement === 'out');

  let inCount = inTransactions.reduce((total, {quantity}) => total + quantity, 0);
  let outCount = outTransactions.reduce((total, {quantity}) => total + quantity, 0);

  return inCount > outCount;
}
console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

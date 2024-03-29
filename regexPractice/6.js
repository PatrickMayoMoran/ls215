function formatDate(date) {
  let incomingDate = /(\d{4})-(\d{2})-(\d{2})/
  return date.replace(incomingDate, '$3.$2.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)

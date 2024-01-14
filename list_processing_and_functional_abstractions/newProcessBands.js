
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  let newBands = data.map(band => {
    let newBand = {
      name: capitalize(removeDots(band.name)),
      country: 'Canada',
      active: band.active,
    }
    return newBand;
  });

  return newBands;
}

function removeDots(name) {
  return name.replace('.','');
}

function capitalize(name) {
  let words = name.split(' ');
  words = words.map(word => word[0].toUpperCase() + word.slice(1));

  return words.join(' ');
}

let processedBands = processBands(bands);
console.log(processBands(bands));
console.log(processedBands === processBands(bands));
console.log(processedBands === bands);
console.log(processedBands[0] === bands[0]);
// Display of differences
console.log('Unprocessed:');
console.log(bands);

console.log('Processed:')
console.log(processedBands);


// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]

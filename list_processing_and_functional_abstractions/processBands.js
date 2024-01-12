let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data.forEach(band => {
    canadize(band);
    normalizeName(band);
  });
  return data;
}

function normalizeName(band) {
  band.name = band.name.replace('.','');
  band.name = capitalize(band.name);
}

function canadize(band) { band.country = 'Canada'; };

function capitalize(name) {
  let words = name.split(' ');
  words = words.map(word => word[0].toUpperCase() + word.slice(1));

  return words.join(' ');
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function normalize(name) {
  let noPeriods = name.replace(/\./g, '');
  let capped = noPeriods.split(' ').map(n => n[0].toUpperCase() + n.slice(1)).join(' ');
  return capped;
}
function processBands(data) {
  let processedBands = data.map(band => {
    return {
      name: normalize(band['name']),
      country: 'Canada',
      active: band['active'],
    }
  });
  return processedBands;
}

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },


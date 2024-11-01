/*
  GOAL: Output to the console each element and its count in given array

  INPUT array of elements
  OUTPUT output to the console

  RULES
    Array as an argument? Yes
    No argument? No
    More than one argument? No
    Array always have strings? Yes
    Empty array possible? Yes, log "nothing here"
    Output look like example, ie format matters? Yes should match
    Return value of function matter? No
    Order of output matter? Yes, by number of times, greatest to least

  DSA
    Object to hold elements and their count
    Kind of problem? unique, count, sort greatest to least

    ** create a count object
    iterate through all the elements of the given array
      ** if element exists as a key in the object, increment count by 1
      ** if element doesn't exist, add it as a key with initial value of 1

    iterate through keys of object
      for each key, output the key and its corresponding value
*/

function countOccurrences(elements) {
  let count = {};

  elements.forEach(e => {
    if (count[e]) {
      count[e] += 1;
    } else {
      count[e] = 1;
    }
  });

  let entries = Object.entries(count);
  entries.sort((a,b) => b[1] - a[1]);
  console.log(entries);

  entries.forEach(e => {
    console.log(`${e[0]} => ${e[1]}`);
  });
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

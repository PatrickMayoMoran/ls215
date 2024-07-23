/*

https://leetcode.com/problems/sort-array-by-increasing-frequency/description/?envType=daily-question&envId=2024-07-23

1636. Sort Array by Increasing Frequency
Easy

Topics
Companies

Hint
Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.

 

Example 1:

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
Example 2:

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
Example 3:

Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
 
PROBLEM/GOAL: Given an array of integers, return an array of those integers sorted by frequency of appearance rather than integer value. If two or more integers have the same frequency, order them from greatest to least based on integer value.

INPUT: Array of integers
OUTPUT: Array of integers 

RULES:
  (More, less, different, empty, order)
  - Always get an array as input 
  - Input array will only have integer values 
  - *** Other number inputs possible - Inifinity, -Infinity, NaN
    - these values should be filtered out 
    - Returned array should only have whole number, integer values 
  - **** Input array could be empty, in that case return empty array 

EXAMPLE
-> [1,1,2,2,2,3,4,4]
-> {
  1: 2,
  2: 3,
  3: 1,
  4: 2
}

-> {
  1: [3]
  2: [1, 4]
  3: [2]
}

[3, 1, 1, 4, 4, 2, 2, 2]


Data Structures

ALGORITHM 
  - Helper Functions:
    - count the number of occurrences of a value 
  - What kind of a problem is this? 
    - selection, 

  *** if given array is empty, return it
  *** filter out NaN from given array 
  *** filter out -Infinity and Inifinity
  *** initialize count object 
  *** iterate through numbers of given array 
    - if number is already a key, increment value by 1
    - if number is not already a key, initialize pair with value of 1
  *** create object to hold frequency as key and array of values as value
  *** iterate through pairs of count object 
    - if frequency number already exists, add value to array 
    - if frequency number is not already a key, initialize it with array with single value value
  *** initialize result array 
  - iterate through frequency object pairs
    - for each value, push it to the result array frequency times 
  - return result array

*/
function getCounts(integers) {
  let counts = {};
  integers.forEach(int => {
    if (counts[int] === undefined) {
      counts[int] = 1;
    } else {
      counts[int] += 1;
    }
  });
  return counts;
}

function convertFrequencies(counts) {
let pairs = Object.entries(counts);
  let frequencies = {};
  pairs.forEach(pair => {
    let number = parseInt(pair[0]);
    let frequency = pair[1];
    if (frequencies[frequency] === undefined) {
      frequencies[frequency] = [number];
    } else {
      frequencies[frequency].push(number);
    }
  });
  return frequencies;
}

function frequencySort(array) {
  if (array.length === 0) return array;
  let integers = array.filter(e => e === e && e !== Infinity && e !== -Infinity);

  let counts = getCounts(integers)
  let frequencies = convertFrequencies(counts);

  let result = [];
  let pairs = Object.entries(frequencies);
  pairs.forEach(pair => {
    let frequency = parseInt(pair[0]);
    let integers = pair[1];
    integers.forEach(int => {
      for (let counter = 0; counter < frequency; counter += 1) {
        result.push(int);
      }
    });
  });

  return result;
}

console.log(frequencySort([1,1,2,2,2,3])) // [3,1,1,2,2,2]
console.log(frequencySort([1,1,2, NaN, NaN, -Infinity, Infinity, Infinity, 2,2,3,4,4])) // [3,1,1,4,4,2,2,2]
// console.log(frequencySort([])) // []
console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1])) // Output: [5,-1,4,4,-6,-6,1,1,1]


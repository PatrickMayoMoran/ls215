// Suppose you have an arbitrary natural number (the target) and a set of one or more additional natural numbers (the factors). Write a program that computes the sum of all numbers from 1 up to the target number that are also multiples of one of the factors. For instance, if the target is 20, and the factors are 3 and 5, that gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.If no factors are given, use 3 and 5 as the default factors
// QUESTIONS
//  guard against unexpected inputs?
//  Is the target always positive and greater than 1?
//  Will our factors positive > 1?
//  Will our factors be unique
//  Up to - but not including - the target
//
// GOAL: Return a sum of unique multiples of given factors; multiples all less than target, greater than or equal to 1
//
// INPUT: Target number, maybe a set of factors with at least one number 
// OUTPUT: Integer sum
//
// EXAMPLES
console.log(sumFactors(2)); // 0
console.log(sumFactors(2, [1])); // 1
console.log(sumFactors(2, [1, 1, 1, 1])); // 1
console.log(sumFactors(10)); // 3, 5, 6, 9 => 23
console.log(sumFactors(10, [15, 20])); // 0
console.log(sumFactors(10, [15, 4, 12, 7])); // 4, 8, 7 => 19
console.log(sumFactors(20, [3, 3, 3, 6, 9, 11]));// 3, 6, 9, 12, 15, 18, 11 => 74


//
// RULES
//  EXPLICIT
//    - 3 and 5 are default factors if no factors supplied
//
//  IMPLICIT
//    - only unique factors and multiples
//
// ALGORITHM
//    if no factors given, use 3 and 5
//    filter down to only valid factors
//      is a number 
//      greater than or equal to 1
//      less than the target
//      is an integer
//    filter down to unique factors
//      first and last index positions are the same
//    filter down to unique multiples
//      create collectin for unique multiples
//      check collection for given factor
//        if factor is not already there, add it
//      for a factor, loop through collection of unique factors
//        if candidate factor REMAINDER division of unique factor is 0
//        skip to the next candidate
//        otherwise, add it to collection of unique factorMultiples
//    create a collection for calculate multiples
//    loop through unique multiples
//      for each multiple, start at 1 as a multiplier and
//      comput the product of the multiplier and the factor
//      if the product is less than the target, add it to multiples collection
//      otherwise, break;
//
//    Calculate and return the sum of multiples
//
// CODE
function validFactor(number, target) {
  return (typeof number === 'number' && number >= 1 && number < target && number % 1 === 0);
}

function sumFactors(target, factors) {
  if (factors === undefined) factors = [3, 5];
  let validFactors = factors.filter(factor => validFactor(factor, target));

  let uniqueFactors = [];
  validFactors.forEach(factor => {
    if (!uniqueFactors.includes(factor)) {
      uniqueFactors.push(factor);
    }
  });

  let uniqueFactorMultiples = [];
  uniqueFactors.forEach(factor => {
    if (!uniqueFactorMultiples.includes(factor) && notAMultiple(factor, uniqueFactorMultiples)) {
      uniqueFactorMultiples.push(factor);
    }
  });

  let calculatedMultiples = [];
  uniqueFactorMultiples.forEach(factor => {
    for (let multiplier = 1; (multiplier * factor) < target; multiplier += 1) {
      let product = multiplier * factor;
      calculatedMultiples.push(product);
    }
  });

  let sum = calculatedMultiples.reduce((acc, value) => acc + value, 0);
  return sum;
}

function notAMultiple(factor, factorMultiples) {
  for (let i = 0; i < factorMultiples.length; i += 1) {
    let comparison = factorMultiples[i];
    if (factor % comparison === 0) return false;
  }

  return true;
}


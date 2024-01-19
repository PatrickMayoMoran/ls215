// PROBLEM/GOAL: Return an integer indicating whether the first of two version
// numbers is less than, equal to, or greater than the second version number
//
// INPUT:string of a version number, all integers and periods
// OUTPUT: -1, 0, or 1
// RULES
//  EXPLICIT
//    version number comes as a string of any length, at least 1 digit
//    parts of a version number are period separated
//    parts will all be non negative integers
//    if first version is greater, return 1
//    if first version is less, return -1
//    if first version is equal, return 0
//    if either version has anything other than digits and ., return null
//
//  IMPLICIT
//    Additional 0's do not mean an additional version; functionally
//    equivalent to same version number without 0's
//
//  DATA STRUCTURES
//    Array for each version part
//    Pad Array with zeros if it is shorter than the other one
//
//  ALGORITHM
//    scan each string for any character that is not a digit or period
//      if found, return null
//    split each version on periods
//    turn strings into numbers
//    figure out which array is longer - save this as iteration length
//    loop through the indices
//      fetch index value for each index
//        if value is undefined, return 0
//        otherwise, return the value
//      for each index, compare the number
//      return 1 if version 1 number is greater
//      return -1 if version 2 is greater
//
//    return 0
function compareVersions(version1, version2) {
  if (!validVersion(version1) || !validVersion(version2)) return null;
  version1Parts = parseVersion(version1);
  version2Parts = parseVersion(version2);

  version1Parts = version1Parts.map(part => parseInt(part, 10));
  version2Parts = version2Parts.map(part => parseInt(part, 10));

  let length = version1Parts.length > version2Parts.length ? version1Parts.length : version2Parts.length;

  console.log(length);

  // console.log(version1Parts, version2Parts);
  return 0;
}

function fetch(array, index)

function parseVersion(version) {
  let separatorRegEx = /\./;
  return version.split(separatorRegEx);
}

function validVersion(string) {
  let invalidVersionRegEx = /[^\d.]+/;
  let match = string.match(invalidVersionRegEx);
  if (!!match) return false;
  return true;
}

let v1 = '0.1';
let v2 = '1';
let v3 = '1.0';
let v35 = '1.0.0.0.0.0.0.0';
let v36 = '1.0.0.0.0.0.0.1';
let v4 = '1.1';
let v5 = '1.2';
let v6 = '1.2.0.0';
let v7 = '1.18.2';
let v8 = '13.37';
console.log(compareVersions(v1, v2) ); // -1);
console.log(compareVersions(v1, '1.3.4.t') ); // null);
console.log(compareVersions('1.3.4.t', v1) ); // null);
console.log(compareVersions(v2, v3) ); // 0);
console.log(compareVersions(v2, v35) ); // 0);
console.log(compareVersions(v2, v36) ); // -1);
console.log(compareVersions(v36, v4) ); // -1);
console.log(compareVersions(v5, v6) ); // 0);
console.log(compareVersions(v5, v7) ); // -1);
console.log(compareVersions(v8, v7) ); // 1);
console.log(compareVersions(v36, v35) ); // 1);

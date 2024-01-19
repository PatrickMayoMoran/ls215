// PROBLEM/GOAL: Return an integer indicating whether the first of two version
// numbers is less than, equal to, or greater than the second version number
//
// INPUT:string of a version number, all integers and periods
// OUTPUT: -1, 0, or 1
function compareVersions(version1, version2) {
  // ...
}

let v1 = '0.1';
let v2 = '1';
let v3 = '1.0';
let v35 = '1.0.0.0.0.0.0.0';
let v36 = '1.0.0.0.0.0.0.1';
let v4 = '1.1''
let v5 = '1.2';
let v6 = '1.2.0.0';
let v7 = '1.18.2';
let v8 = '13.37';
console.log(compareVersions(v1, v2) === -1);
console.log(compareVersions(v2, v3) === 0);
console.log(compareVersions(v2, v35) === 0);
console.log(compareVersions(v2, v36) === -1);
console.log(compareVersions(v36, v4) === -1);
console.log(compareVersions(v5, v6) === 0);
console.log(compareVersions(v5, v7) === -1);
console.log(compareVersions(v8, v7) === 1);
console.log(compareVersions(v36, v35) === 1);

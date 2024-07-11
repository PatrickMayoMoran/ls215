function copyObj(objToCopy, propertiesArray) {
  let newCopy = {};
  if (propertiesArray) {
    propertiesArray.forEach(key => newCopy[key] = objToCopy[key]);
  } else {
    let keys = Object.keys(objToCopy);
    keys.forEach(key => newCopy[key] = objToCopy[key]);
  }

  return newCopy;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

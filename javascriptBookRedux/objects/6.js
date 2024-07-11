
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;
console.log(myObj);

// Will only show keys on object itself, so qux
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// Will show keys on object first - qux - then inherited - foo and bar
for (let key in myObj) {
  console.log(key);
}

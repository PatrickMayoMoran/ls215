if (('tio'.indexOf('cat')) < 0) console.log("Mayo Understands");

let result;

function returnMayo() {
  if (('tio'.indexOf('cat')) < 0) return "Mayo Understands";
}

result = returnMayo();
console.log(result);

let expressionNotStatement = ("tio".indexOf('cat') < 0) ? "Success!" : "Failure";
console.log(expressionNotStatement);

// if statement one line to have some code execute
if (('tio'.indexOf('cat')) < 0) console.log("Mayo Understands");

let result;

// if statement with single line return within a function
function returnMayo() {
  if (('tio'.indexOf('cat')) < 0) return "Mayo Understands";
}

result = returnMayo();
console.log(result);

// let noThankYou = if (('tio'.indexOf('cat')) < 0) console.log("Mayo Understands");
// Above does NOT work because if is a statement, not expression - it does not
// evaluate to a value so cannot be used to initialize a variable

let expressionNotStatement = ("tio".indexOf('cat') < 0) ? "Success!" : "Failure";
console.log(expressionNotStatement); // ternary expression does evaluate so can be used in variable initialization

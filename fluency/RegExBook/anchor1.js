function p(string) {
  console.log(string.match(/^c.t/ig));
}

p("cat"); // ['cat']
p("cot\n"); // ['cot']
p("CATASTROPHE"); // ['CAT']
p("WILDCAUGHT"); // null
p("wildcat\n"); // null
p("-CET-"); // null
p("YACHT"); // null

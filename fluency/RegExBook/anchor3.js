function p(string) {
  console.log(string.match(/c.t$/mig)); // m flag matches even when newlines present
}

p("cat"); // ['cat']
p("cot\n"); // ['cot']
p("CATASTROPHE"); // null
p("WILDCAUGHT"); // null
p("wildcat\n"); // ['cat']
p("-CET-"); // null
p("YACHT"); // ['CHT']

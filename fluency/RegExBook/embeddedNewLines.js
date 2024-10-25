function p(str, regex) {
  console.log(str.match(regex));
}

let text = "cat\ncot\nCATASTROPHE\nWILDCAUGHT\n" +
           "wildcat\n-GET-\nYacht"

// m flag means embedded new lines count as "end" or "start" of new lines
p(text, /^c.t/mig) // [ 'cat', 'cot', 'CAT' ]
p(text, /c.t$/mig) // [ 'cat', 'cot', 'cat', 'cht' ]

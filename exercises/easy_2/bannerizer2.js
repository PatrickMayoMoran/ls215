/* GOAL: Display a message in a formatted box. Max line length is 72 - if a
 * message exceeds this length, wrap it down to the next line.
 *
 * INPUT: string message of unknown length
 * OUTPUT: output to screen, no return value
 *
 * RULES:
 *    if message is less than 72 characters, fit it in a single box
 *    if message is empty, print empty box
 *    if message is longer than 72 characters, print each group of 72 or fewer
 *      characters on a new line within box
 *
 * DSA: Array to hold split up string
 *
 * HELPERS:
 *    Split message
 *      create constant with split length
 *      create lines which is message length divided by 72
 *      create empty array
 *      loop
    *      starting at 0, current line number
    *      as long as current line number times is less than lines
    *        start at current line number times 72 for starting index
    *        create a line that is a slice from the start to start + 72
    *        add 1 to our line number
    *
    *     return array of lines
 *
 * ALGORITHM
 *    initialize padding variable to length of message
 *    split message into groups of 72 or less stored in an array
 *    set padding to length of first element
 *
 *    Create horizontal rule - delimiter, space, padding
 *    Create empty line - delimiter, space padding
 *
 *    log horizontal rule and empty line
 *    log each element of array
 *    log horizontal rule and empty line
 *
 */
function repeatCharacter(character, times) {
  let repeated = '';
  for (i = 0; i < times; i += 1) {
    repeated += character;
  }

  return repeated;
}

function splitMessage(message) {
  const maxLength = 72;
  let lines = [];
  let numberOfLines = message.length / 72;

  for (i = 0; i <= numberOfLines; i += 1) {
    let startIndex = i * 72;
    let endIndex = startIndex + 72;
    let line = message.slice(startIndex,endIndex);
    lines.push(line);
  }

  return lines;
}

function logInBox(message) {
  let lines = splitMessage(message);
  const padding = lines[0].length;
  const horizontalRule = `+${repeatCharacter('-', padding + 2)}+`;
  const emptyLine = `|${repeatCharacter(' ', padding + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);

  lines.forEach(line => console.log(`| ${line} |`));

  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('');
logInBox('To boldly go where no one has before');
logInBox('I don\'t really care if it nearly kills me, I\'d give the world if you asked me to, I could break a glass just to watch it shatter, I\'d do anything just to be with you');

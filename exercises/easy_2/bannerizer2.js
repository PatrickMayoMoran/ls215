function repeatCharacter(character, times) {
  let repeated = '';
  for (i = 0; i < times; i += 1) {
    repeated += character;
  }

  return repeated;
}

function logInBox(message) {
  const horizontalRule = `+${repeatCharacter('-', message.length + 2)}+`;
  const emptyLine = `|${repeatCharacter(' ', message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldly go where no one has before');

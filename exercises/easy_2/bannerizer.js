function logInBox(message) {
  let padding = message.length;
  let middlePadding = '';
  let topBottomPadding = '';
  for (let i = 0; i < padding; i+= 1) {
    topBottomPadding += '-';
    middlePadding += ' ';
  }
  let topBottom = '+-' + topBottomPadding + '-+';
  let middle = '| ' + middlePadding + ' |';

  console.log(topBottom);
  console.log(middle);
  console.log('| ' + message + ' |');
  console.log(middle);
  console.log(topBottom);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

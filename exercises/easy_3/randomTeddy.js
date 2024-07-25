const howOldIsTeddy = () => {
  let age = randomNum(20, 200);
  console.log(`Teddy is ${age} years old!`);
}

function randomNum (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

howOldIsTeddy();

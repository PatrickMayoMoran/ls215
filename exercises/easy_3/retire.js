function whenRetire () {
  let age = parseInt(prompt("How old are you ? "));
  let retirementAge = parseInt(prompt("At what age would you like to retire? "));
  let workingYears = retirementAge - age;

  let date = new Date()
  let year = date.getFullYear();

  console.log(`It is ${year}. You will retire in ${workingYears + year}`);
  console.log(`You only have ${workingYears} left to go!`);
}

whenRetire();

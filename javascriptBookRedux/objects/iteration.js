let frizPlayer = { 
  team: "American University",
  skill: "elite",
};

let mayo = Object.create(frizPlayer);
mayo.name = "Mayo";
mayo.age = "30";

let tag = Object.create(frizPlayer);
tag.name = "Tag";
tag.age = "30";

// will show name, age, AND THEN team, skill. Own object properties listed first
for (let prop in mayo) {
  console.log(prop);
}

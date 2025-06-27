// **String Destructuring**
const farmAnimals = "cow horse sheep pig chicken";
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" "); 
// Animal colors: sheep (black), cow (blackAndWhite), pig (pink)
const [black, blackAndWhite, pink] = ["sheep", "cow", "pig"];
const [white] = ["chicken"]; 

// **Array Destructuring**
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;
const [r, o, y, g, b, indg, v] = rainbowColors; 

// **Object Destructuring**
const muppet = {
  muppetName: "Miss Piggy", 
  color: "pink", 
  song: "Never Before, Never Again", 
  song1: "Never Before, Never Again",
  song2: "Moving Right Along",
  song3: "Bein' Green",
  song4: "I Hope That Something Better Comes Along", 
  job: "Cast member of The Muppet Show", 
  partner: "Kermit",
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy" 
  }
};

const { muppetName, color, song, song1, song2, song3, song4, job, partner, nested: { job: nestedJob, partner: nestedPartner } } = muppet;

// **Export variables for testing**
module.exports = {
  bessie, dolly, babe, little,
  moo, neigh, baa, oink, cluck,
  black, blackAndWhite, pink,
  red, orange, yellow, green, blue, indigo, violet,
  r, o, y, g, b, indg, v,
  muppetName, color, song, song1, song2, song3, song4, job, partner, nestedJob, nestedPartner
};

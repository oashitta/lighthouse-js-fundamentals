// weather
const raining = false;
const cold = false;
const temperature = 42;

if (temperature < 0) {
  conaole.log("make sure you pick out a scarf");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it.");
} else {
  console.log("Shortsleeves are fine");
}

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// using logical operators
if (temperature < -40 || temperature > 40) {
  console.log("Maybe it is not a good idea to go out.");
}

if (!raining) {
  console.log("Leave your umbrella at home.");
}

// voting rights

const isCitizen = true;
const age = 30;

// using logical operators
if (isCitizen && age > 18) {
  console.log("you are eligible to vote.");
}

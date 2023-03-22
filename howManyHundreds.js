let container = 0;

function howManyHundreds(bottles) {
  if (bottles % 100 === 0) {
    return (container = bottles / 100);
  } else {
    return (container = Math.floor(bottles / 100));
  }
}

console.log(howManyHundreds(1000));

let cars = [];

function carPassing(cars, speed) {
  let newCar = {
    time: Date.now(),
    speed: speed,
  };
  cars.push(newCar);
  return cars;
}

console.log(carPassing(cars, 60));
console.log(carPassing(cars, 88));

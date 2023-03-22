const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

function chooseStations(stations) {
  const chosenStations = [];
  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const location = station[2];
      if (location === "school" || location === "community centre") {
        chosenStations.push(station[0]);
      }
    }
  }
  return chosenStations;
}

console.log(chooseStations(stations));

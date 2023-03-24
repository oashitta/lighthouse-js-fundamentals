let bins = {
  waste: 8,
  recycling: 10,
  compost: 11,
};

function smartGarbage(trash, bins) {
  if (trash === "recycling") {
    bins.recycling++;
  } else if (trash === "waste") {
    bins.waste++;
  } else if (trash === "compost") {
    bins.compost++;

    return bins;
  }
}

console.log(smartGarbage("recycling", bins));

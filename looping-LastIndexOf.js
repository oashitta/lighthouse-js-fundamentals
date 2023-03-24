function lastIndexOf(arr, num) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (num === arr[i]) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf([9, 1, 4, 1, 2], 1));
console.log(lastIndexOf([8, 1, 4, 1, 2], 3));
console.log(lastIndexOf([10, 1, 4, 1, 2], 2));
console.log(lastIndexOf([5, 5, 5], 5));

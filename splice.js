var donuts = ["cookies", "cinnamon sugar", "creme de leche"];

donuts.splice(-2, 0, "chocolate frosted", "glazed");

console.log(donuts);

const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]

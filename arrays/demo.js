/****************************************/
/*** PUSH, POP, SHIFT, SLICE, UNSHIFT ***/
/****************************************/

let myArray = [];
// Returns the array length
myArray.push("Hola!");
myArray.push("mundo");
myArray.push("!");
console.log(myArray);
// Returns the popped element
myArray.pop();
myArray.shift();
console.log(myArray);

myArray.unshift("Hola");
console.log(myArray);

const colors = ["rojo", "azul", "amarillo"];
console.log(colors.slice(0, 2));
console.log(colors.slice(1, 2));

/************/
/*** SORT ***/
/************/

let numbersArray = [56, 3, 2, 56, 100];
console.log(numbersArray.sort());
console.log(numbersArray.sort((a, b) => a - b));
console.log(numbersArray.sort((a, b) => b - a));

/**********************/
/*** INCLUDES, SOME ***/
/**********************/
console.log(numbersArray.includes(23));
console.log(numbersArray.includes(3));
let animals = [
  { name: "Cat", canFly: false, number: 1 },
  { name: "Bat", canFly: true },
  { name: "Bird", canFly: true },
  { name: "Dog", canFly: false, number: 2 },
];
animals.includes({ name: "Cat", canFly: false });

console.log(animals.some((animal) => animal.name === "Cat"));
function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
console.log(animals.sort(compare));

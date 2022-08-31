/**************/
/*** REDUCE ***/
/**************/

// Return the sum of an array using reduce and iterating the array
const sumArray = [1, 2, 3, 4, 5, 6];

let result = 0;
console.log(sumArray.reduce((prev, current) => prev + current, 0));
// Iterating the array
result = 0;
sumArray.forEach((num) => (result += num));
console.log(result);

//Show only for even numbers
console.log(
  sumArray.reduce(
    (prev, current) => (prev += current % 2 === 0 ? current : 0),
    0
  )
);

/**************/
/*** FILTER ***/
/**************/

// Filter only persons older than 18 years
const personsArray = [
  { name: "Jorge", lastName: "Lopez", age: 18 },
  { name: "Jose", lastName: "Molina", age: 84 },
  { name: "Matias", lastName: "Rodriguez", age: 7 },
  { name: "David", lastName: "Muñoz", age: 22 },
];

// Filter persons by search string. Filter persons named Julio.
console.log(personsArray.filter((person) => person.name.includes("Jo")));
console.log(personsArray.filter((person) => person.name.includes("Jorge")));

console.log(
  personsArray.filter((person) => {
    return person.age >= 18;
  })
);

/***********/
/*** MAP ***/
/***********/

// Add to the persons array the age of birth. Take that the current year is 2022.
const currentYear = 2022;
console.log(
  personsArray.map((person) => ({
    ...person,
    yearOfBirth: currentYear - person.age,
  }))
);

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

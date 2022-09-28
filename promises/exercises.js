// https://betterprogramming.pub/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec

/*

// Ejercicio 1

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

console.log("end");

*/

// Ejercicio 2
/*
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
*/

// Ejercicio 3

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

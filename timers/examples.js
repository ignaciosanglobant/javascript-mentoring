// setTimeout --> Ejecuta despues de ciertos ms

/*
console.log("Hola");

setTimeout(() => {
  console.log("Hola que tal!");
}, 2000);

console.log("que tal");
*/

/*
// CANCELAR UNA EJECUCION
console.log("Hola");

const miTimeout1 = setTimeout(() => {
  console.log("Hola que tal!");
}, 2000);

console.log("que tal");
clearTimeout(miTimeout1);
console.log("detuve la ejecucion");
*/

/*
console.log("Contando");
let numero = 1;
setInterval(() => {
  console.log(numero);
  numero++;
}, 1000);
*/

/*
console.log("Contando");
let numero = 1;
const contador = setInterval(() => {
  console.log(numero);
  if (numero === 10) {
    console.log("DETENTE!");
    clearInterval(contador);
  }
  numero++;
}, 1000);
*/

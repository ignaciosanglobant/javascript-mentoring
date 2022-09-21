const sumArray = [5, 3, 2, 1, 3];

// Sumar numeros usando algún método que no sea reduce
let resultado = 0;
sumArray.forEach(function (numero) {
  resultado = resultado + numero;
});
// console.log(resultado);

// Sumar sumArray usando reduce
// valorFinal = 8
// previo = 8
// actual = 2
const resultadoReduce = sumArray.reduce((previo, actual) => previo + actual, 0);
// console.log(resultadoReduce);

const palabras = ["Hola", "como", "estas"];
const frase = palabras.reduce((previo, actual) => previo + " " + actual, "");
// console.log(frase);

// Imprimir todos los numeros por consola

// sumArray.forEach((numero) => console.log(numero));
// sumArray.forEach(function (numero) {
//   console.log(numero);
// });
function imprimeNumero(numero) {
  console.log(numero);
}
// sumArray.forEach(imprimeNumero);

const imprimeNumeroArrow = (numero) => console.log(numero);
// sumArray.forEach(imprimeNumeroArrow);

// Multiplicar por 2 todos los numeros e imprimir el arreglo completo

const numerosMultiplicados = sumArray.map((numero) => numero * 2);
// console.log(numerosMultiplicados);

// Sumar solo numeros pares

const sumaPares = sumArray.reduce(function (previo, actual) {
  if (actual === 3) {
    return previo + actual;
  }
  return previo;
}, 0);

// console.log(sumaPares);

// Imprimir un arreglo solo con números pares

// const sumArray = [5, 3, 2, 1, 3];
// Ordenar los números ascendente
const letras = ["g", "f", "a"];

const personsArray = [
  { name: "Jorge", lastName: "Lopez", age: 18 },
  { name: "Jose", lastName: "Molina", age: 84 },
  { name: "Matias", lastName: "Rodriguez", age: 7 },
  { name: "David", lastName: "Muñoz", age: 22 },
];

// Filtrar personas de edad mayor a 18
console.log(personsArray.filter((persona) => persona.age >= 84));
console.log(personsArray);
// Filtrar personas cuyo nombre empiece con "Jo"

// Imprimir un el arreglo agregando el campo birthYear que tiene el año de nacimiento de la persona (siendo que es 2022)

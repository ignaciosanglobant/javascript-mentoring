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
console.log(frase);

// Imprimir todos los numeros por consola
// Multiplicar por 2 todos los numeros e imprimir el arreglo completo
// Sumar solo numeros pares
// Imprimir un arreglo solo con números pares
// Ordenar los números ascendente
// Ordernar descendentemente

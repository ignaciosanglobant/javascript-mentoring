// console.log(nombre);

// const nombre = ""; // Reference error
// let nombre = ""; //Reference error
// var nombre = "Ignacio"; //undefined

// imprimeHolaMundoArrow();
const imprimeHolaMundoArrow = () => {
  console.log("Hola mundo");
};

imprimeHolaMundo();
function imprimeHolaMundo() {
  console.log("Hola mundo");
}

imprimeNombre();
function imprimeNombre() {
  console.log(nombreFuncion);
}

var nombreFuncion = "Jose";

// funcionEnConstante();
var funcionEnConstante = function () {
  console.log("funcionEnConstante");
};

function modificaEdad() {
  edad = 12;
}
console.log("edad:", edad);
modificaEdad();
console.log("edad:", edad);
var edad = 20;
console.log("edad:", edad);

const algo = 1;
let variable = "dos";
var booleano = true;

function miFuncionTradicional() {
  console.log("Llamada desde mi función");
  return;
}

const copiaFuncion = miFuncionTradicional;
// const copiaFuncion2 = miFuncionTradicional();

// console.log(copiaFuncion, copiaFuncion2);

let cantidad = 34;

// console.log(
//   "El tipo de dato de la variable cantidad es:",
//   typeof miFuncionTradicional
// );

const numeroGrande = BigInt(12);
// console.log(typeof numeroGrande);

function tipoDeDato(variable) {
  if (typeof variable === "number") {
    console.log("esto es un numero");
  } else {
    console.log("esto no es un numero");
  }
}

// tipoDeDato(2);
const resultado = 1 / 3;
console.log(typeof resultado.toFixed(2).toString());

const texto = "hola";

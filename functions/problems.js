// Que imprime el siguiente codigo

/*
(function () {
  console.log("Hola mundo!");
})();

function todoOK(resultado) {
  console.log(resultado);
}
function llamadoCallback(todoOK, enCasoError) {
  try {
    //...
    const resultado = 1;
    todoOK(resultado);
  } catch (error) {
    enCasoError(error);
  }
  callback();
}

llamadoCallback(function (resultado) {
  console.log(resultado);
});
*/

const miObjeto = {
  numero: 2,
  suma: function (a, b) {
    return a + b;
  },
  sumaArrow: (a, b) => a + b,
};

//() => console.log("Hola mundo");

function imprimeNombre({ nombre, apellido, edad }) {
  console.log(nombre, apellido, edad);
}

function imprimeNombreOrdenado(nombre, apellido) {
  console.log(nombre, apellido);
}
const persona = { nombre: "Juan", apellido: "Perez", edad: 14 };
imprimeNombre(persona);
// imprimeNombreOrdenado("Sanhueza", "Ignacio");

/*

// Ejercicio 1


// Ejercicio 2
function suma(a, b) {
  const resultado = a + b;
}

const sumaArrow = (a, b) => a + b;

console.log(suma(1, 2));
console.log(sumaArrow(1, 2));
*/

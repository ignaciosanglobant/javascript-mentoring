// this.nombre = "Fernando";
// const nombre = "Fernando";

const objeto = {
  nombre: "Ignacio",
  imprimeNombre: function () {
    console.log(this.nombre);
  },
  imprimeEdad: function () {
    console.log("edad", this.edad);
  },
};

const otroObjeto = {
  nombre: "Mario",
  edad: 12,
};

const imprimeEdad = objeto.imprimeEdad;
imprimeEdad.bind(otroObjeto)();

const imprimeNombre = objeto.imprimeNombre;
imprimeNombre.bind(otroObjeto)();

/*
// objeto.imprimeNombre();
// imprimeNombre();
const imprimeNombreReferenciado = imprimeNombre.bind(objeto);
// imprimeNombreReferenciado();




imprimeNombre.bind(this)();
*/

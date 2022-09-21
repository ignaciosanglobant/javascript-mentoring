this.nombre = "Fernando";
// const nombre = "Fernando";

const objeto = {
  nombre: "Ignacio",
  imprimeNombre: function () {
    console.log(this.nombre);
  },
};

const otroObjeto = {
  nombre: "Mario",
};

objeto.imprimeNombre();
const imprimeNombre = objeto.imprimeNombre;
imprimeNombre();

const imprimeNombreReferenciado = imprimeNombre.bind(objeto);

imprimeNombreReferenciado();
imprimeNombre.bind(otroObjeto)();
imprimeNombre.bind(this)();

this.nombre = "Mario";
const apellido = "Muñoz";
this.edad = 55;

function funcionExterna() {
  console.log("funcion externa");
}

const objeto = {
  nombre: "Francisco",
  apellido: "Perez",
  imprimeNombreThis: function () {
    console.log(this.nombre + " " + this.apellido);
  },
  imprimeNombre: function () {
    console.log(this.nombre + " " + apellido);
  },
  imprimeThis: function () {
    console.log(this);
  },
};

// objeto.imprimeThis();
// objeto.imprimeNombreThis();
// objeto.nombre = "Gonzalo";
// objeto.imprimeNombreThis();
// objeto.imprimeNombre();
console.log(this);

// Arreglos
// Spread operator ...
// console.log(arreglo.slice(0, 3));
// console.log(arreglo.slice(3));
let [x, y, z, ...cambioNombre] = arreglo;
// console.log(x, y, z);
// console.log("resto", cambioNombre);

// const corto = [1, 2];
// const [primero, segundo, tercero, ...otros] = corto;
// console.log({ primero, segundo, tercero, otros });

const arreglo = [1, 2, 3, 4, 5];
let copiaArreglo = arreglo;
arreglo.push(6);
// console.log({ arreglo });
// console.log({ copiaArreglo });
copiaArreglo = [...arreglo];
arreglo.push(7);
// console.log({ arreglo });
// console.log({ copiaArreglo });

// Spread operator
const nuevoArreglo = [0, ...arreglo, 8, 10, ...arreglo];
// console.log({ nuevoArreglo });

const objeto = {
  nombre: "Pedro",
  edad: 18,
  imprimeHolaMundo: () => console.log("Hola mundo"),
};

const { nombre, edad: edadPersona, imprimeHolaMundo } = objeto;
console.log(edadPersona);

/*


// Objetos


const { nombre, edad: edadPersona, imprimeHolaMundo } = objeto;
imprimeHolaMundo();
console.log({ nombre, edadPersona });

const objetoPlus = { ...objeto, apellido: "Perez" };
console.log(objetoPlus);

const { numero: numerito = 1 } = { numero: undefined };
console.log("numero", numerito);

function imprimeNombre(objeto) {
  console.log("Hola", objeto.nombre);
}

imprimeNombre(objeto);

const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

const {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = metadata;

console.log(englishTitle, localeTitle);
*/

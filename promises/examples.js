import axios from "axios";

/*
const unaPromesa = new Promise((siSaleBien, siSaleMal) => {
  // Operacion asíncrona
  const resultado = 1 / 1 === 1;
  if (resultado) {
    siSaleBien(true);
  } else {
    siSaleMal(false);
  }
});

unaPromesa
  .then((resultadoOperacion) =>
    console.log("el resultado es", resultadoOperacion)
  )
  .catch((error) => console.log("Salió mal :(", error));

*/

// https://rickandmortyapi.com/documentation/#get-a-single-character
/*
// Opcion 1
axios
  .get("https://rickandmortyapi.com/api/character/2")
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log("Error", error.message));

  */

/*
// Opcion 2
(async () => {
  try {
    const result = await axios.get(
      "https://rickandmortyapi.com/api/character/2"
    );
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
})();
*/

/*
  8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el
  nombre que tenga más letras del arreglo, y debe de trabajar así:
  let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
  let heroeLargo = masLargo( heroes );
  console.log( heroeLargo ); // Profesor Charles Xavier
*/

function masLargo(arr) {
  let nombreLargo = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > nombreLargo.length) {
      nombreLargo = arr[i];
    }
  }
  return nombreLargo;
}

let heroes = ["Deadpool", "Cíclope", "Magneto", "Profesor Charles Xavier"];

let heroeLargo = masLargo(heroes);
console.log(heroeLargo); // Profesor Charles Xavier

// Crear un algoritmo, que basado en la nota
// imprima si el alumno aprueba la materia
// se aprueba o no (con 60 pts aprueba)
// si el alumno tiene nota < 50 imprimir: 
// Por favor estudie más

let nota = 49;

if ( nota >= 60 ){
  console.log('El alumno aprueba la clase!');
} else {
  if (nota < 50) {
    console.log('Por favor estudie más!');
  }
  console.log('El alumno NO aprueba la clase!');
}

console.log('Fin de programa');
// let dia = 1; lunes, 2 = martes...
// let dia = 0; domingo
let dia = 0; 

console.log('Mensaje del switch');

switch ( dia ) {
  case 0:
    console.log('Es domingo');
    break;

  case 1:
    console.log('Es lunes');
    break;

  case 2:
    console.log('Es martes');
    break;

  case 3:
    console.log('Es miércoles');
    break;

  case 4:
    console.log('Es jueves');
    break;

  case 5:
    console.log('Es viernes');
    break;

  case 6:
    console.log('Es sábado');
    break;

  default:
    console.log('El día no es permitido');
}

console.log('Mensaje de if anidado');

if ( dia === 0 ) {
  console.log('Es domingo');
} else if ( dia === 1 ) {
  console.log('Es lunes');
} else if ( dia === 2 ) {
  console.log('Es martes');
} else if ( dia === 3 ) {
  console.log('Es miércoles');
} else if ( dia === 4 ) {
  console.log('Es jueves');
} else if ( dia === 5 ) {
  console.log('Es viernes');
} else if ( dia === 6 ) {
  console.log('Es sábado');
} else {
  console.log('El día no es permitido'); 
}
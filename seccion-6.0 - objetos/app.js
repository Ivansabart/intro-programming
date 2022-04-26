function describirPersona( p ) {
  console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);
}

let persona = {
  nombre: 'Iván',
  edad: 28,
  estatura: 1.80,
}

describirPersona(persona);
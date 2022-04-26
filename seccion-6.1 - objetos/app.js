let persona1 = {
  nombre: 'Iván',
  edad: 28
};

let persona2 = {
  nombre: 'Marisol',
  edad: 22
};

let persona3 = {
  nombre: 'Juan',
  edad: 40
};

let personas = [persona1, persona2, persona3];

for ( let i = 0; i < personas.length; i++ ) {
  let persona = personas[i];
  console.log(persona.nombre + ' -- ' + persona.edad );
}
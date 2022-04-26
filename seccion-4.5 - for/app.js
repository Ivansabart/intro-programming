// Tabla de multiplicar con cualquier base hasta cualquier límite

let base = 2;
let limite = 20;

for ( let i = 1; i <= limite; i++ ) {
  
  let resultado = base * i;

  console.log( base + ' x ' + i + ' = '+ resultado );
}

// Tabla de multiplicar con cualquier base hasta cualquier límite

function imprimirTabla( base, limite ) {

  for ( let i = 1; i <= limite; i++ ) {
    
    let resultado = base * i;

    console.log( base + ' x ' + i + ' = '+ resultado );
  }
}

imprimirTabla(5, 10);

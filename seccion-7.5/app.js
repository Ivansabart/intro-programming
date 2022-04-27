/*
  5- Dado el siguiente arreglo:
   let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
  Haga una impresión en consola así:
    

  1 es un número impar
  6 es un número par
  
  Debe de utilizar un ciclo FOR para generar dicha impresión
 */

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

for ( let i = 0; i < numeros.length; i++ ) {

  if ( (numeros[i] % 2) === 0)
    console.log(numeros[i] + ' es par');
  else
    console.log(numeros[i] + ' es impar');
 
}


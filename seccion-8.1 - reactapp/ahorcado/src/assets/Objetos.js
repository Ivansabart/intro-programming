const objetos = {};

const palabra = 'KETOCONAZOL';

const letras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

comprobar = () => {
  const palabraOcultaArr = this.palabraOculta.split('');
  console.log(palabraOcultaArr);
}

objetos.palabra = palabra;
objetos.letras = letras;
objetos.palabraOculta = '_ '.repeat(palabra.length);
objetos.comprobar = comprobar;

export default objetos;
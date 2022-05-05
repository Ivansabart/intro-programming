// Functional Component
// Importaciones terceros
import React from "react";

// Importaciones locales
import img9 from "./assets/img/9.png";
import Objetos from "./assets/Objetos";


// Componente basado en funciones, clases ya no se usan
const AhorcadoApp = () => {

  const imagen = <img src={img9} class="ahorcado-img" alt="" />;

  const contenido = (
  <>
      <div class="row">
        <div class="col text-center">
          {imagen}
          <h3>
            Intentos <small>3 / 9</small>
          </h3>
        </div>
      </div>

      <div class="row">
        <div class="col text-center">
          <h1> {Objetos.palabraOculta} </h1>
        </div>
      </div>

      <div class="row">
        <div class="col text-center">
          {
           Objetos.letras.map((letra) => (
            <button onClick={Objetos.comprobar} value={letra} class="btn btn-primary">
              {letra}
            </button>
           ))
          }
        </div>
      </div>
    </>
);

  return contenido;
};



// Se exporta para utilizar este componente fuera de este archivo
export default AhorcadoApp;

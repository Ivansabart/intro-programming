class Carro {
  
  constructor(marca, tipo, puertas){
    
    this.marca = marca;
    this.tipo = tipo;
    this.puertas = puertas;

    this.creadoEn = 'Hoy';
    this.encendido = false;
    this.gasolina = 100;

  }

  encenderCarro() {
    if ( this.encendido )
      console.error('El carro ya estaba encendido');
    else { 
      this.encendido = true;
      console.log('Carro encendido');
    } 

    return this;
      
  }

  realizarViaje(consumo) {

    if ( !this.encendido ) return console.error('Carro apagado');
    
    if ( consumo > this.gasolina ) return console.warn('No puede realizar el viaje: gasolina ' + this.gasolina);
      
    this.gasolina = this.gasolina - consumo;
    
    return 'Le queda ' + this.gasolina;
           
  }

}

let carro = new Carro('Mazda', 'Sedan', 2);

console.log(carro);


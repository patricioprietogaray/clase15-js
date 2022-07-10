// Clases



class Jedi { //declaro la clase
    constructor(nombre, color) {  //son los valores que voy a pasar (no son fijos)
        // propiedades
        this.arma = 'Sable de luz'; //valor fijo
        this.colorSableLuz = color; //pasado por el constructor
        this.poder = 'La fuerza';   //valor fijo
        this.nombre = nombre;       //pasado por el constructor
        // metodo
        this.hablar = function () {
            console.log(`${this.nombre}: Que la fuerza te acompañe!.`);
        };
    }
}

//creacion de una instancia
let j = new Jedi();

// imprimir en la consola
console.log(j);
j.arma='pistola laser';
console.log(j);
console.log('no se tiene acceso a la funcion padre en forma directa');
console.log(Jedi.arma)

// se aplica la herencia de los valores fijos de la funcion
// constructora y paso los parámetros de lo que varia.
let yoda = new Jedi('Yoda', 'Verde'); //parámetros a pasar por el constructor
console.log(yoda);
yoda.hablar();
let obiWan = new Jedi('Obi Wan', 'Azul');
console.log(obiWan);
obiWan.hablar();

// Reduce explicado nuevamente

// El reduce recibe un callback (en ese sentido tiene en comun con el filter y con el map)
// el callback accede al array mediante un bucle ( el reduce itera al callback)
// El reduce como a partir de un input generar otro.
// A partir de un array el acumulador del callback tendra a al acumulador que es el valor
// inicial que viene del segundo parametro de reduce, el acumulador se ira actualizando
// numero, el segundo parametro de la funcion callback tomara los valores del array
// y en este caso la funcion sumarÃ¡ lo acumulado mÃ¡s el valor del item del array.
// ej:    acumulador  +  numero (valor del array)  =  acumulador
//    AC  +  Nro   = ACactualizado
//    0   +   1    =    1
//    1   +   2    =    3
//    3   +   3    =    6
//    6   +   4    =    10
//    10   +  5    =    15

// const numeros=[1,2,3,4,5];

// function callback(acumulador, numero) {
//     return acumulador + numero;
// }

// const suma = numeros.reduce(callback, 0);

// console.log(suma);

/////

const usuarios = [
    //  [0]     [1]    [2]
    ['Agustin', '23', 'Profesor'],
    ['Oriana',  '31', 'Enfermera'],
    ['Martina', '19', 'MecÃ¡nica'],
    ['Omar',    '27', 'Soldado'],
]

// argumentos del callback(datosInicio, datoObjeto.reduce, index, array )


function callback(acumulador, datoRecibidoUsuario) {
    const nombre = datoRecibidoUsuario[0];
    const edad = datoRecibidoUsuario[1];
    const profesion = datoRecibidoUsuario[2];

    // por cada iteracion mostrara cada array (individual dentro de personas)
    // console.log(nombre, edad, profesion );

    // spread operator ...     usuarios viene del valor que le pasa reduce a callback
    //                          y nombre es el dato recibido del array usuarios segun indice
    return { usuarios: [...acumulador.usuarios, nombre], 
        edades: [...acumulador.edades, edad], 
            profesiones: [...acumulador.profesiones, profesion] } ;
    // la primera iteracion se pasan los datos iniciales
    // de la segunda hasta la ultima se pasan el objeto {}
    // que retorno ? los arrays que voy generando 
    // { usuarios: [], edades: [], profesiones: [] }

    // dentro del callback se puede aplicar la logica que se necesite
    // por ejemplo sacar porcentajes, sumas, o lo que sea (en nuestra
    // logica)
}

// el reduce buclea a la funcion callback y como inicio (en vez de cero) crea arrays vacios
// para que sean "llenados" cuando se recorre el array usuarios.
const usuariosReducidos = usuarios.reduce(callback, { usuarios: [], edades: [], profesiones: [] });

console.log(usuariosReducidos);

// para sacar el promedio de las edades
console.log('Promedio de las edades');

function callback2(acumulador, datoRecibidoUsuario) {
    const edad = datoRecibidoUsuario[1];
    return acumulador + edad;
}

const totalEdadesUsuarios = usuarios.reduce(callback2, 0);
console.log(totalEdadesUsuarios);


//////

// Reduce explicado nuevamente

// El reduce recibe un callback (en ese sentido tiene en comun con el filter y con el map)
// el callback accede al array mediante un bucle ( el reduce itera al callback)
// El reduce como a partir de un input generar otro.
// A partir de un array el acumulador del callback tendra a al acumulador que es el valor
// inicial que viene del segundo parametro de reduce, el acumulador se ira actualizando
// numero, el segundo parametro de la funcion callback tomara los valores del array
// y en este caso la funcion sumarÃ¡ lo acumulado mÃ¡s el valor del item del array.
// ej:    acumulador  +  numero (valor del array)  =  acumulador
//    AC  +  Nro   = ACactualizado
//    0   +   1    =    1
//    1   +   2    =    3
//    3   +   3    =    6
//    6   +   4    =    10
//    10   +  5    =    15

// const numeros=[1,2,3,4,5];

// function callback(acumulador, numero) {
//     return acumulador + numero;
// }

// const suma = numeros.reduce(callback, 0);

// console.log(suma);

/////

const usuarios = [
    //  [0]     [1]    [2]
    ['Agustin', '23', 'Profesor'],
    ['Oriana',  '31', 'Enfermera'],
    ['Martina', '19', 'MecÃ¡nica'],
    ['Omar',    '27', 'Soldado'],
]

function callback(acumulador, datoRecibidoUsuario) {
    const nombre = datoRecibidoUsuario[0];
    const edad = datoRecibidoUsuario[1];
    const profesion = datoRecibidoUsuario[2];

    // por cada iteracion mostrara cada array (individual dentro de personas)
    // console.log(nombre, edad, profesion );

    // spread operator ...     usuarios viene del valor que le pasa reduce a callback
    //                          y nombre es el dato recibido del array usuarios segun indice
    return { usuarios: [...acumulador.usuarios, nombre], 
        edades: [...acumulador.edades, edad], 
            profesiones: [...acumulador.profesiones, profesion] } ;
    // la primera iteracion se pasan los datos iniciales
    // de la segunda hasta la ultima se pasan el objeto {}
    // que retorno ? los arrays que voy generando 
    // { usuarios: [], edades: [], profesiones: [] }
}

// el reduce buclea a la funcion callback y como inicio (en vez de cero) crea arrays vacios
// para que sean "llenados" cuando se recorre el array usuarios.
const usuariosReducidos = usuarios.reduce(callback, { usuarios: [], edades: [], profesiones: [] });

console.log(usuariosReducidos);

// para sacar el promedio de las edades
console.log('Promedio de las edades');

function callback2(acumulador, datoRecibidoUsuario) {
    const edad = datoRecibidoUsuario[1];
    return acumulador + Math.floor(edad);
}

const totalEdadesUsuarios = usuarios.reduce(callback2, 0);
const promedioEdadUsuarios = totalEdadesUsuarios / usuarios.length;
console.log(totalEdadesUsuarios);
console.log(promedioEdadUsuarios);

// closures


// function saludar (saludo) {
//     return function(nombre) {
//         console.log(`funcion saludar ${saludo} retorno de la funcion nombre ${nombre}`);
//     }
// }

// let saludoHola = saludar('Hola');
// console.log(saludoHola);
// saludarHola('pato');

//////////////////////////

// function hacerSaludo(lenguaje) {
//     if ( lenguaje === 'en') {
//         return function () {
//             console.log('Hello');
//         }
//     }
//     if ( lenguaje === 'es') {
//         return function () {
//             console.log('Hola');
//         }
//     }
// }

// let saludoIngles = hacerSaludo('en');
// let saludoEspaniol = hacerSaludo('es');

// console.log(hacerSaludo('es'));

////////////////////////////////
function crearContador() {
    let contador = 0;
    console.log(`Contador de crearContador en ${contador}.`);

    return function incrementar() {
        console.log(`Contador de incrementar antes su incrementacion (+1) en ${contador}.`);
        contador = contador + 1;
        console.log(`Contador de incrementar luego de su incrementacion (+1) en ${contador}.`);
    }
}


// cuando ejecuto crearContador no se ejecuta el retorno
// muestra la inicializacion (cero)
console.log(`Llamo a la funcion crearContador.`);
crearContador();
console.log(`Vuelvo de la funcion crearContador.`);


// en contador1 se devuelve la funcion crearContador (return)
// en cero!!! no se ejecuta la funcion incrementar()!!!!!!!! 
console.log(`Creo una constante contador1 que le devuelve el valor de la funcion crearContador.`);
const contador1 = crearContador();
console.log(`Muestro la constante contador1 ${contador1}.`);

// para ejecutrar la funcion incrementar se debe tratar a
// la constante contador1 como si fuera una funcion y se
// debe llamar: 
console.log(`La constante contador1 la llamo como si fuera una funcion contador1();`);
// ahora muestra un uno!!!!
contador1();
console.log(`Vuelvo de la funcion contador1.`);
console.log(`La constante contador1 la llamo como si fuera una funcion contador1();`);
// ahora muestra un uno!!!!
contador1();
console.log('/////////////////////////////////////')
console.log(`Vuelvo de la funcion contador1.`);
console.log(`La constante contador1 la llamo como si fuera una funcion contador1();`);
// ahora muestra un uno!!!!
contador1();
console.log(`Vuelvo de la funcion contador1.`);
console.log('/////////////////////////////////////')
console.log(`Vuelvo de la funcion contador1.`);
console.log(`La constante contador1 la llamo como si fuera una funcion contador1();`);
// ahora muestra un uno!!!!
contador1();
console.log(`Vuelvo de la funcion contador1.`);
console.log('/////////////////////////////////////')
console.log(`Vuelvo de la funcion contador1.`);
console.log(`La constante contador1 la llamo como si fuera una funcion contador1();`);
// ahora muestra un uno!!!!
contador1();
console.log(`Vuelvo de la funcion contador1.`);
console.log('/////////////////////////////////////')
console.log(`Vuelvo de la funcion contador1.`);
console.log(`La constante contador1 la llamo como si fuera una funcion contador1();`);
// ahora muestra un uno!!!!
contador1();
console.log(`Vuelvo de la funcion contador1.`);
console.log('Retorna la funcion incremento sin inicializar contador, o sea que incremento cuando lo necesito en cualquier lugar del codigo.  !!!!!!!! ');


console.log('****************CONTADOR A Y B*********************************');
const contadorA = crearContador();
const contadorB = crearContador();

console.log('****************CONTADOR A*********************************');
contadorA();
contadorA();
console.log('****************CONTADOR B*********************************');
contadorB();
console.log('****************CONTADOR A*********************************');
contadorA();
contadorA();
contadorA();
console.log('****************CONTADOR B*********************************');
contadorB();
console.log('****************CONTADOR A*********************************');
contadorA();
console.log('****************CONTADOR B*********************************');
contadorB();
contadorB();

console.log('se pidria hacer un juego con varios participantes');
console.log('crear funciones con closures!!!!');
// las variables son privadas si bien se muestran desde la funcion
// no se tiene acceso fuera de ella 
// (concepto de clases propiedades y métodos publicas y privadas)

/////////////////////////////////////////

function saludar (saludo) {
    return function(nombre) {
        console.log(`funcion saludar ${saludo} retorno de la funcion nombre ${nombre}`);
    }
}

const saludito = saludar('hola');
// undefined
saludito('pepe')
// index.js:128 funcion saludar hola retorno de la funcion nombre pepe
// undefined

////////////////////////

function hacerSaludo(lenguaje) {
    if ( lenguaje === 'en') {
        return function () {
            console.log('Hello');
        }
    }
    if ( lenguaje === 'es') {
        return function () {
            console.log('Hola');
        }
    }
}

let saludoIngles = hacerSaludo('en');
let saludoEspaniol = hacerSaludo('es');
saludoIngles();
saludoEspaniol();

////// mensajes de error
function crearImpresoraDeMensajes(tipoMensaje) {
    return function (str) {
        console.log(`${tipoMensaje}: ${str}.`);
    }
}
// paso Error como tipo de mensaje a la funcion crearImpresora
const imprimirError = crearImpresoraDeMensajes('Error');
// paso el mensaje str que devolvera la funcion
imprimirError('Su enlace se encuentra caido');

const imprimirWarning = crearImpresoraDeMensajes('Warning');
imprimirWarning('Atencion! Su suscripción está a punto de caducar');

const imprimirExito = crearImpresoraDeMensajes('Exito');
imprimirExito('Su mensaje ha sido enviado!');



////// mensajes de estilo
// aplicar estilo css
function crearImpresoraDeMensajesEstilos(tipoMensaje, estilos) {
    return function (str) {
        console.log(`%c ${tipoMensaje}: ${str}.`, estilos);
    }
}
const estiloAplicado = 'background: green; color: white; font-size: 20px; font-weight: 600; padding-left:0.5rem;margin-left:0;';
const imprimirEstilo = crearImpresoraDeMensajesEstilos('Estilos CSS', estiloAplicado );
imprimirEstilo('Atención: la aplicacion de un estilo es inminente!')




/// ****** Programacion Orientada a Objetos /////

/* En la poo el paradigma es pensar en herencia.
Con la programacion funcional el enfoque es de composicion
es decir dividir las funcionalidades del programa que 
deseamos escribir, y cada una de esas pequeñas funcionalidades
se escribe la logica correspondiente dentro de una funcion, y
reutilizar la logica tantas veces como sea posible.
Es decir crear de lo chiquito algo grande, es decir, un programa.
Hago una funcion para login, para validar un password, para saber
en que parte de la pagina estoy y asi mostrar una vista distinta. 
Una funcion la autenticacion de un token para una base de datos, etc.

La lógica de la programacion orientadas a objetos es distinta, 
no tiene que ver con componer, sino con heredar. No voy de lo particular
a lo general como era con la programacion funcional (composicion).
Voy de lo general a lo particular. Comienzo desde un zoologico y voy a cada
animal. ¿Que tienen en comun los animales? son seres vivos. Los animales
van a heredar que son seres vivos. Los felinos heredan que son seres vivos
y los animales felinos heredaran los felinos (que son seres vivos).
Y asi desde lo general a lo particular o sea seres vivos, felinos, gato.

La programacion orientada a objetos es un modelo de programacion
informatica que organiza el diseño de software en torno a datos u
objetos, en lugar de funciones y logica. Se centra en los objetos
que los desarrolladores quieren manipular en lugar
de enfocarse en la logica necesaria para manipularlos.
Este enfoque de programacion es adecuado para programas
que son grandes, complejos y se actualizan o mantienen
activamente.

JS no es un lenguaje propiamente orientados a objetos como 
java c++. JS tiene orientacion para la programacion funcional.
¿Como trabajar con POO en un lenguaje que no fue diseñado para
esto? Solucion: Prototipo.
object.prototype --> objeto padre
permite trabajar con los objetos, con sus propiedades y sus metodos
.length, .map, .reduce provienen de un object.prototype.

String.length -> en tiempo de ejecucion JS envuelve el string y 
se comporta como un objeto.

JS es a menudo descrito como un lenguaje basado
en prototipos - para proporcionar mecanismos de 
herencia, los objetos pueden tener un objeto
prototipo, el cual actua como un objeto plantilla
que hereda metodos y propiedades.

ejemplo:*/
const array = [1,2,3];
const string = 'hola';

console.log(array); //muestra como objeto
console.log(string.length); // no lo muestra
// como objeto aunque se configura como tal
// no se muestra el prototype

// para ver un string como objeto
const string2 = new String('Adios');
console.log(string2);
//Js crea una instancia de una funcion 
// constructora (con new)

//utilizar this apunta al objeto que hace referencia al
// objeto que estamos trabajando, por medio de this se puede
// invocar propiedades y metodos del objeto apuntado
// tener en cuenta los scopes en JS

// EJ:
// for(let i = 0; i < this.length; i++) ..
// profesores.filter(dskfjasldfjl);  profesores es un array

//this apunta a profesores

//para ver el objeto dom y todo lo referido al navegador
console.log(this);

// se puede agregar una nueva propiedad al objeto window
// mediante this
this.nombre='bienvenido al objeto window (propiedad agregada)';
console.log(this.nombre);

// llamando al mismo objeto dentro del scope usando this
const objetoThis1 = {
    // propiedad
    nombre: 'Contexto del Objeto objetoThis1',
    // metodo
    imprimir: function () {
        console.log(this.nombre);
    }
}
objetoThis1.imprimir();
console.log(objetoThis1.nombre); //se puede acceder directamente
                                // desde afuera del scope

const objetoThis2 = {
    nombre: 'Contexto del Objeto objetoThis2',
    imprimir: objetoThis1.imprimir,
}

/// que pasara? imprime objetoThis1 u objetoThis2?
// imprime objetoThis2 porque llama a la funcion imprimir del 
// objeto this1, pero como hace referencia a this.nombre en objeto1
// y me estoy trayendo la funcion entera a objeto dos (como copiar y pegar)
// entonces al ejecutar ese this hara referencia al objeto destino y no
// al objeto origen
objetoThis2.imprimir(); 


// Funcion constructora

/* La funcion constructora es la version de JS de una clase.
Notarás que tiene todas las características que esperas en 
una funcion, aunque no devuelve nada o crea explícitamente
un objeto -básicamente sólo define propiedades y métodos.
Para declarar una funcion constructora se crea la funcion igual que 
cualquier otra funcion y después se crea un objeto utilizando la 
palabra clave "new" lo cual indica que la función original es 
una funcion constructora

Como los closures que son funciones que crean funciones
puedo usar funciones constructoras para crear objetos
se pueden pasar parametros por ej el nombre, color */

//funcion constructora nombre en mayúsculas
function Jedi(nombre, color) {
    // propiedades
    this.arma='Sable de luz';
    this.colorSableLuz=color;
    this.poder='La fuerza';
    this.nombre = nombre;
    // metodo
    this.hablar = function() {
        console.log(`${this.nombre}: Que la fuerza te acompañe!.`);
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
let yoda = new Jedi('Yoda', 'Verde');
console.log(yoda);
yoda.hablar();
let obiWan = new Jedi('Obi Wan', 'Azul');
console.log(obiWan);
obiWan.hablar();

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

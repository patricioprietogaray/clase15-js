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

1:43

String.length
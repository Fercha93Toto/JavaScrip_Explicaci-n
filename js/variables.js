//comentario de una linea
/* Comentario de varias lineas
    continua comentario de varias lienas
*/

// Declarar variables
// Se puede usar, pero las buenas practicas dictan que se deben declarar variables con let

var a = 10; //Declaración de variable
let b = 20; //Declaración de variable
const c = 10; //Declaración constante y asigno el valor de 10

//Variables => var, let, const => palabras reservadas para declarar variables
//var => variables global
//undefined => variable sin valor
//null => variable sin valor
//boolean => true, flase
//number => 1,2,3,4,5, 3.5
//string => 'hola', "hola", `hola`
//object => {nombre: 'Juan', apellido: 'Perez'}

var x =5; //Declaro variable x y le asigno valor 5
//console.log(x)

// Declarar una variable con el nombre e imprimir un mensaje de saludo con la variable, ¿Hola Diego como estas?
var nombre = 'Diego';
//console.log('Hola ' + nombre + ' ¿como estas?'); //Concatenar texto con variable
//console.log('Hola' + ' ' + nombre + ' ' + ¿Como estas?'); //Concatenar texto con variable

var num1 = 50;
var num2 = 10;
//var resultado = num1 + num2;
//console.log(num1 + num2); // Suma
//console.log(num1 - num2); // Resta
//console.log(num1 * num2); // Multiplicación
//console.log(num1 / num2); // División
//console.log(num1 % num2); // Modulo
//var num1 = 100;
//var num1 = 150; // Siempre se va a tomar el ultimo valor asignado
//console.log(num1); // 100

c = 20; //No se puede reasignar valor a un constante
// console.log(c);

var A = 10;
var nombrePersona = 20;
// +=, -=, *=, /=, %=,

// -------------------------- EJERCICIOS ----------------------------

var sustantivo = 'pero';
var adjetivo = 'negro';
var verbo = 'corrio';
var adverbio = 'rapidamente';

/*
Concatenar las cadenas para crear la siguiente oración => El perro negro corrió rapidamente a la tienda
*/

/*
Concatenar el resultado de la suma con un mensaje:
=> El resultado de 10 + 5 es 15
*/

/*
Concatenar el resultado de la resta con un mensaje:
=> La diferencia entre 20 y 8 es 12
*/

/*
Concatenar el resultado de la multiplicación con un mensaje:
=> La diferencia entre 20 y 8 es 12
*/

// +=; -=, *=, /=, %= // Operación y asignación
var saldo = 3000;
saldo /= 500;
// console.log(saldo);

// -------------------------- CONDICIONALES ----------------------------
/*
if (condicion) {
    codigo que se ejecuta si la condicion es verdadera
} else {
    codigo que se ejecuta si es falsa
}

if: operador que evalua una condición
condición: Es una expresión que se evalua
*/

// Saludo dependiendo la hora del día
var hora = new Date(). getHours(); //Metodo para obtener la hora del sistema

if (hora < 12) { //Si es verdadera ejecuta el codigo del bloque
    console.log("Buenos días");
    } else if (hora < 18) { //Evalua una nueva condición solo si las anteriores fueron flasas
        console.log("Buenas tardes");
    } else { // Si todas las anteriores fueron falsas, jecuta el codigo del bloque
        console.log("Buenas noches");
}
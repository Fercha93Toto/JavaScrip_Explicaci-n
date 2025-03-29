// Escapar caracteres
// En ocaciones el texto que se almacena en variables no es tan sencillo, contienen caracteres especiales o saltos en línea etc.

/* Caracteres de escape
    \' Comilla simple
    \" Comilla doble
    \\ Barra invertida
    \n Salto de linea
    \r Retorno de carro
    \t Tabulación
    \b Retroceso
    \f Salto de página
*/

var miCadena = 'Una frase con "Comillas dobles" dentro de comillas dobles';
var miCadena2 = "Una frase con 'comillas simples' dentro de comillas simples";
var miCadena3 = 'Que \tfacil es incluir \\\ 'comillas simples\' \ny "comuillas dobles"';
// console.log(miCadena3);

// ----------------------------------------------- ARRAYS ----------------------------------------
/* En ocaciones, a los arrays se le llama vectores, matrices, listas o inclusos arreglos. no obstante el termino array es el mas utilizado y es una palabra comunmente aceptada en el entorno de la programación.

Un array es una colección de variables, que pueden ser todas del mismo tipo o de tipos diferentes. los arrays se utilizan para multiples valores en una sola variable.
*/
var dia1 = "Lunes";
var dia3 = "Martes";
var dia3 = "Miercoles";
var dia4 = "Jueves";
var dia5 = "Viernes";
var dia6 = "Sabado";
var dia7 = "Domingo";

/* Aunque el codigo anterio no es incorrecto, si es poco eficiente y complica en exceso la programación, si en ves de los días de la semana se tubiera que guardar el nombre de los meses del año, el nombre de todos los paises del mundo, se tendrian que crear deceas de variables, lo cual es poco practico. 

En lugar de crear variabe para cada dia de la semana, se peude utilizar un array para almacenar los nombres de los días de la semana. */
var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
//console.log(diasSemana[0]); // "Lunes"

// => Ejercicios> Crear un array con los nombres de los meses del año y mostrar el nombre del mes de tu cumpleaños.

// --------------------------------------------------- Notacion de corchetes ----------------------------------
// Cadena = 5
// Indice = 4
var dia1 ="Lunes";
//console.log(dia[0])
//console.log(dia[1])
//console.log(dia[2])
//console.log(dia[3])
//console.log(dia[4])
//console.log(dia[-11])
//console.log(dia[5])

// --------------------------------------------------- Inmutabilidad de cadenas de caracteres ----------------------------------
// => no se puede cambiar
var miCadena = "Jola Mundo";
miCadena[0] = "H";
//console.log(miCadena);

var miCadena = "Jola Mundo";
miCadena = "Hola Mundo";
//console.log(miCadena);

// --------------------------------------------------- Notación de corchetes ultimo caracter ----------------------------------------------
// El ultimo indice de la cadena es longitur -1
var c = 2;
var cadena ="javascript";
//console.log(cadena [cadena.length -c])

// -------------------------------------------- Arreglos - Listas ---------------------------------------------
var miArreglo = ["Diego, 24"]
//console.log(miArreglo);

// -------------------------------------------- Arreglos - Listas -Anidados ---------------------------------------------

var estudiantes = [["Diego, 25], ["Ana", 20]];
    //console.log(estudiantes[1][1]);

    //var otroArreglo = [10, 20, 30]
    //console.log(otroArreglo);
    //console.log(otroArreglo[0]);
    //console.log(otroArreglo[1]);
    //console.log(otroArreglo[2]);

//var sume = otroArreglo[0]+otroArreglo[1]+otroArreglo[2];
//console.log(sume);

//-----------------------------------------------Modificar datos de un arreglo ------------------------------------
var otroArreglo = [10, 20, 30]
otroArreglo[0] = 80;
console.log(otroArreglo);

// ------------------------------------------ Acceder a arreglos multidimencionales -------------------------------
var miArreglo = [[1, 2, 3,]. [4, 5. 6,], [7, 8, 9]],

//Arreglo [[1, 2, 3], [4, 5, 6] [7, 8, 9]],
//Indide       0          1         2
//Indice interno
//console.log(miArreglo[0]);
//console.log(miArreglo[1]);
//console.log(miArreglo[2]);

//console.log(miArreglo[2][0]);

// ------------------------------------------Agregar un elemento del arreglo ---------------------------------------
//push()
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("Verano");
//console.log(estaciones);

// ------------------------------------------ Remover un elemento del arreglo --------------------------------------
//pop() => Elimina el ultimo elemento
estaciones.pop();
//console.log(estaciones);

// ----------------------------------------- Remover el primer elemento del arreglo --------------------------------
//shift() => Remueve el primer elemento
estaciones.shift();
//console.log(estaciones);

// ----------------------------------- Agragar un elemento en primer posiciòn del arreglo --------------------------
//unshift() => Remueve el primer elemento
estaciones.unshift("Invierno");
//console.log(estaciones;

// --------------------------------------------------------- BOOLEANOS ---------------------------------------------
// VARIABLES DE TIPO LOGICO
// Se utilizan para almacenar de verdadero o falso.
var clienteRegistrados = false;
var usuarioActivo = true;

// --------------------------------------------------------- Asignación --------------------------------------------

var x = 5; //Asigna el valor 5 a la variable x
var y = 10; //Asigna el valor 10 a la variable y
var x = y; //Asigna el valor de y a x
//console.log(x); // 10
// Operadores de asignación
// = Asugna un valor a una variable
// += Suma un valor a una variable
// -= Resta un valor a una variable
// *= Multiplica un valor a una variable
// /= Divide un valor a una variable
// %= Asignar el resto de una división a una variable
// **= Asigna el resultado de elevar un número a una potencia a una variable

// --------------------------------------------------- Incremento y decremeto --------------------------------------
/*
Los operadores de incremento y decremento se utilizan para aumentar o disminuir a una unidad el valor de una variable.
*/
var a = 5;
a = a + 1; // Incrementa el valor de a en 1
//console.log(a) // 6
a++; // Incrementa el valor de a en 1
//console.log(a); //7

a--; // Decrementa el valor de a en 1
//console.log(a);
a = a - 1; // Decrementa el valor de a en 1
//document.writeln(a); //5

// ----------------------------------------------------- OPERADORES LOGISTICOS ---------------------------------------
/*
Los operadores logisticos son inprescindibles para realizar aplicaciones complejas ya que se utilizan para tomar decisiones sobre las instruciones que deberia ejecutar el programa en fución de ciertas condiciones.
El resultado de cualquier operación que utilice operadores logicos es un valor booleano, es decir, verdadero o falso.

Negación (!): El operador de negación se utiliza para invertir el valor de una expresión logica.
*/
var visible = true;
var oculto =!visible; // Invierte el valor de visible
//console.log(oculto);

/*
Si la variable original es de tipo booleano, es muy sencillo obtener su negociación. Sin embargo, que sucede cuando la variable es un número o una cadena de texto? En estos caso, JavaScrpt considera que el valor 0, null, undefined, NaN o una cadena vacia es falso, y caulquier otro valor es verdadero.
/*
var cantidad = 0;
vacio = !cantidad; // Invierte el valor de número
//console.log(vacio); //true

cantidad = 5;
vacio = !cantidad; //Invierte el valor de número
//console.log(vacio); //true

var mensaje ="";
console.log(mensaje); // true
mansajeVacio = !mensaje; // Invierte el valor de mensaje
//console.log(mensajeVacio); // true

// ------------------------------------------------------------ AND ---------------------------------------------------

/*AND (&&): El operador AND se utiliza para evaluar dos expreciones logicas y devuelde verdadero si ambas son verdaderas.
AND obtiene su resultado combinado dos valores booleanos. El operador se indica mediante dos simbolos de ampersand (&) y se utiliza para combinar dos experiones logicas. (&&) y su resultado es true si ambas expresiones so verdaderas, y false en cualquier otro caso.
*/
var valor1 = true;
var valor2 = false;
resultado = valor1 && valor2; // Evalua valor1 y valor2
// console.log(resultado); // false

var valor1 = true;
var valor2 = true;
resultado = valor1 && valor2; // Evalua valor1 y valor2
//console.log(resultado); //true

// ------------------------------------------------------------ OR ----------------------------------------------------
//or (||): El operador 0R se utuliza para valuar dos expresiones logicas y devuelve verdadero si al menos una de allas es verdadera.
var valor1 = true;
var valor2 = false;
resultado = valor1 || valor2; // Evalua valor1 y valor2
//console.log(resultado); // false

var valor1 = false;
var valor2 = false;
resultado = valor1 || valor2; // Evalua valor1 y valor2
//console.log(resultado); // false

// -------------------------------------------------------- ARISMETICOS ----------------------------------------------
/*
los operadores aritmeticos se utilizan para realizar operaciones con variables.
Estos operadores también se peuden combinar con los operadores de asignaciòn para simplificar la estructura del codigo.
=+ Suma y asigna
=- Resta y asigna
=* Multiplica y asigna
=/ Divide y asigna
=% Asigna el resto de una división
=** Asigna el resultado de elevar a una potencia
*/ 

var a = 5;
var b = 2;
var suma = a + b; // Suma a y b
var resta = a - b; // Resta a y b
var multiplicación = a * b; // Multiplica a y b
var división = a /b; // Divide a y b
var resto = a % b // Obtienen el resto de la división de a entre b
var resto = a ** b;// Evalua a a la pentencia de b
//console.log(suma); //7
//console.log(resta); // 3
//console.log(mutiplicación); // 10
//console.log(división); // 2.5
//console.log(resto); // 1
//console.log(pontencia); // 25

// -------------------------------------------------------- RELACIONALES --------------------------------------------
/*
Los operadores realcionales se utilizan para comparar dos valores y devuelven un valor booleano.
> Mayor que
> Menos que
>= Mayor o igual que
>= Menor o igual que
== igual que
=== igual que (estricto)
!= Diferencia que
!== Diferencia que (estricto)
*/
var a = '5';
var b = 5;
resultado1 = a >= b; // Compara si a es mayor o igual que b
resultado2 = a <= b; // Compara si a es menor o igual que b
resultado3 = a == b; // Compara si a es igual que b
resultado4 = a != b; // Compara si a es diferente que b
resultado5 = a === b; // compara si a es igual que b y del mismo tipo
resultado6 = a !== b; // Compar asi a es diferente que b y de difernte tipo

//console.log(resultado6);

let num1 = '5';
let num = 5;
//console.log(num1 != num2);

let num3 = '5';
let num4 = 5;
console.log(num3 !== num4);

var texto1 = "a";
var texto2 = "b";
resultado = texto1 < texto2;

//console.log(texto1.charCodeAt(0));
//console.log(texto2.charCodeAt(0));

// ------------------------------------------------ ESTRUCTURAS DE CONTROL DE FLUJO ----------------------------------
/*
las estructura de contol de flujo son bloques de codigo que permiten controlar el flujo de jecuión de un programa. Estas estructuras permiten tomar decisiones, realizar repeticiones y ejecutar instruciones en función de ciertas condiciones.

Estructura if:
La estructura if se utiliza para ejecutar un bloque de codigo si una condición es verdadera.
if: operador que evalua una condición
condición: Es una expresiòn que evalua
if (condición) {
    código que se ejecuta si al condición es verdadera
}
*/
var mostrarMensaje = true;
if (mostraMensaje) {
    console.log("Hola, mundo!");
}

var mostrarMensaje = true;
if (mostrarMensaje == true) {
    console.log("Hola, Mundo!");
}

// Saludo dependiendo de la hora del día
var hora = new Date().getHours(); // Metodo para obtener la hora del sistema

if (hora < 12) { // Si es verdadera ejecuta el codigo del bloque 
    console.log("Buenos días");
} else if (hora > 18) {// Evalua una nueva condición solo si las anteriores fueron falsas
    console.log("Buenas tardes");
} else { // Si todas las anteriores fueron falsas, ejecuta el código del bloque
    console.log("Buenas noches");
}

// ------------------------------------------------------ ESTRUCTURA FOR -----------------------------------------------
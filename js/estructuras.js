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

// ------------------------------------------------------ ESTRUCTURA FOR --------------------------------------------

/**
 *  Las estructuras if y else if no son muy eficientes cuando se necesita repetir un bloque de codigo un n+imero determinado de veces
 Ejemplo: Si se requiere mostrar un mensaje 5 veces, se tendrìa que escribir el codigo 5 veces.
 La estructura for permite realizar este tipo de repeticiones (también llamadas bucle) de una forma más sencilla.
 No obstante su definiciòn formal no es tan sencilla como la de if y else if.

 La estructura for se utiliza para repetir un bloque de código un número determinado de veces.

 form (inicialización; condición; incremento) {
    Código que se ejecuta en cada interacción
}
La idea del funcionamiento de un bucle es la siguiente:
"Mientras la condición indicada se siga cumpliendo, repite la ejecución de las instrucciones definidas dentro del for. Además, después de cada interacciòn actualizada el valor de las variables que se utilizan en la condición."

Componentes del for:
Inicialización: Se ejecuta solo una vez al comienzo del bucle. Aquí es donde se definen las variables que controlán la condición.
Condición: Es la expresión que se evalúa antes de cada iteración. Mientras esta condición sea verdaera, el buvle continuará ejecutándose.
Actualización: Se ejecuta al final de cada interación, justo antes de volver a evaluar la condición. Es común actualizar variables como contadores en este paso.

Ejemplo de un bucle for:
Supongamos que queremos imprimir lo números del 1 al 5 en la consola:
 */

for (let i = 1; i <= 5; i++) {
    //console.log(i);
}

/*
Desglosando el bucle:
Iniciación: let i = 1 → Se establece la variable i con valor 1.
Condición: 1 <= 5 → El bucle seguirá ejecutándose mientras i sea menos o igual a 5.
Actualización: i++ → Depués de cda imteracción, el valor de i se incrementa en 1.
Interacciones de bucle:

Primera interacción: i = 1, la condición i <= 5 es true, se imprime 1 y luego i++, lo que hace que i se convierte en 2.
Segunda interacción: i = 2, la condición i <= 5 es true, se imprime 2 y luego i++, lo que hace que i se convierta en 3.
Tercera interacción: i = 3, la condición i <= 5 es true, se imprime 3 y luego i++, lo que hace que i se convierta en 4.
Cuarta interacción: i = 4, la condición i <= 5 es true, se imprime 4 y luego i++, lo que hace que i se convierta en 5.
Quinta interacción: i = 5, la condición i <= 5 es true, se imprime 5 y liego i++, lo que hace qu i se convierta en 6.
Condición fallida: i = 5, la condición i <= e es false, por lo que el bucle termina.
*/

// --------------------------------------------------------------------- QUÉ ES UN METODO -------------------------------

//Un método en programación es una función asociada a un objeto o clase que realiza una tarea especifica. Los metodos son una parte fundamental de la programaciòn orientada a objetos, pero también se utilizan en otros paradigmas de progrmación.

/*
Definición de método:
Un método es una función que está asociada a un objeto y se puede acceder a los datos de ese objeto o modificar su estado.
En otras palabras, un método es una acción que un objeto puede realizar, y generalmente se define dentro de la estructura de ese objeto.
Métodos en JavaScript
Es JavaScript, los métodos son funciones que se definen dentro de un objeto. Pueden operar sobre las propiedades del objeto y realizar diversas tareas. Los métodos se invocan usando la notación de punto. o la notación de corchetes [].
*/
let persona1= {
    nombre: "Juan", edad: 30, saludar: function() {
        //console.log("Hola, mi nombre es" + this.nombre);
    }
};

// Llamado al método
persona1().saludar(); // "Hola, mi nombre es Juan"

let persona3 = {
    nombre: "Jorge",
    edad: 35,
    saludar() {
        //console.log("Hola" mi nombre es " + this.nombre);
}
};

persona3.saludar(); // "Hola, mi nombre es Juan"

/*
En este caso:

saludar es un método del objeto persona.
El método saludar() accede a la propiedad nombre del objeto persona usando la palabra clave this, que se refiere al objeto en el que método está siendo invocado.

Sintaxis moderna de los métodos en objetos (ES6+):
A partir de ECMAScript 6 (ES6), también se puede escribir métodos de una fomra más concisa: 

let persona = {
    nombre: "Juan",
    edad: 30,
    saludar() {
    console.log("Hola, mi nombre es"+ this.nombre)
    }
};

// Llamando al método
persona.saludar(); //"Hola, mi nombre es Juan"
La difenrencia es que no es necesario escribir la palabra clave function, simplemente se define los métodos con un nombre seguido de paréntesis y llaves.
*/

// --------------------------------------------------------------------------------------------------------------
/**
 * /*
En programación, un objeto es una colecciòn de propiedades y métodos. Un objeto permite agrupas datos y funciones que pertenecen a una entidad o concept especifico. En JavaScript, los objetos son una de las estructuras de datos más importantes, y puedes usalros para presentar casi cualquier cosa: una persona, un coche, una película, etc.

1. ¿Qué es un objeto?
Un objeto es una entidad que contiene un conjunto de propiedades y métodos. Las propiedades son valores asociados con el objeto y los métodos son funciones asociadas a este objeto.

Propuedades: Son los valores que están asociados con una clave (o nombre). Estos valores pueden ser de cualquier tipo (números, cadenas, arrys, etc.)
Métodos: Son funciones que están asociadas con el objeto y pueden acceder o modificar las propiedades del objeto.
2. Sintaxis: de un objeto de JavaScript
Los objetos den JavaScript se definen utilizando llaves {} y sus propiedades se definen como pares de clase (también llamada key) y valor (key: value).

Ejemplo básico de un objeto:
*/
let persona4 = {
    nombre: "Ana",
    saludar() {
        //console.log("Hola, mi nombre es" + this.nombre);
    }
};

persona4.saludar(); // "Hola, mi nombre es Ana"

// ------------------------------------------------------------------------------------------------------------

/**
 * for...in
El bucle for...in en JavaScript se utiliza para iterar sobe las propiedades enumrables de un objeto. o sobre los índices de los elementos en un array. A diferencia del bucle for, que se utiliza para iterar sobre elementos con un contador, el bucle for...in se enfoca en las claves o índices del objeto o array.
for (variable in objeto) {
código que se ejecuta en cada interacción
}
variable: es la variable que tomará cada propiedad del objeto o cada índice del array en cada iteración.
objeto: es el objeto o array sobre el que está iterando.

Supongamos que tenemos un objeo con varias propiedades, y que iterar sobre sus claves:
*/
let profesor = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

for (let clave in profesor) {
    console.log(clave + ": " + profesor[clave]);
}
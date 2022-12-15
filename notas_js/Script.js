//asi colocaremos comentarios en javascript
/*este es un comentario de varías
líneas*/

//VARIABLES
/* en javascript se trabaja con valores y
esos valores tienen un tipo específico de 
datos dependiendo de su propósito
dentro del código*/

//TIPOS DE DATOS
/* undefined: cuando no existe un valor asignado.
null: cuando un objeto es nulo.
boolean: valores buleanos (verdadero y falso)
String: son cadenas de carácteres.
symbol:
number: representa un numero en el código.
ibject: representa un objeto (propiedades y funciones que representan un objeto)*/

/*VARIABLE
crea un espacio en el dispositivo para gusrdar un valor específico
en ese lugar de memoria.*/
//ejemplo:
var miNombre = "Edson";
let
const

//OPERADOR DE ASIGNACIÓN
var a;
var b = 2;

console.log(a) //ERROR 
console.log(b) // tiene un valor.

a = 10;
console.log(a) // ya tiene un valor 
// = es el operador de asignación en javascript.

//ASIGNAR EL VALOR DE UNA VARIABLE A OTRA VARIABLE
var a = 5;
var b = a; //asignamos el valor de (a) como valor de la variable (b)
var a = 5;
var b;
b = a; //asigna la variable en una liena distinta.

// INICIALIZAR VARIABLES
var x = 9; // inicializamos la variable x con el valor 9
var miIdiona = "español";

//VARIABLES NO INICIALIZADAS
var a; // no es inicializada porque no tiene un valor 
a = 56; // ahora si la variable tiene un valor


//OPERACIONES ARITMÉTICAS
//SUMA
var suma = 7 + 12;
console.log(suma) //da el resuletado de la suma.
//RESTA
var resta = 15 - 5;
console.log(resta) //da el resultado de la resta 
var resta = 5 - 15;
console.log(resta) //el resultado en negativo 
//MULTIPLICACIÓN
var producto = 5 * 3;
console.log(producto) //da el resultado de la multiplicación
producto = 9 * 0; //actualizamos el valor de la variable
//DIVISIÓN
var cociente = 20 / 2;
console.log(cociente) // mostrará el resultado de la división
cociente = 17 / 31; //actualizamos el valor de la variable 

// NÚMEROS DECIMALES
var miNumeroDecimal = 24.4; //el punto nos indica que se encuentra un numero decimal
var peso = 78.34;
//MULTIPLICAR NÚMEROS DECIMALES
var producto = 3.4 * 10.4; //se pueden multiplicar numeros decimales y el resultado sera un número decimal
producto = 2.4 * 4; 
producto = 6 * 8.9; 
producto = 3.6 * 0; 
producto = -5.7 * 3.4; // se puede multiplicar un numero decimal con un numero entero
//DIVIDIR NUMEROS DECIMALES
var cociente = 5.0 / 2.0;
//RESTO DE UNA DIVISIÓN
var resto 15 % 5; /*el símbolo de porcentaje es el operador que nos
permite obtener el resto de la división*/

//INCREMENTAR EL VALOR DE UNA VARIABLE
var librosComprados = 105; //inicialmente 
// Opción 1
librosComprados = librosComprados + 1;
// Opción 2
librosComprados++; // solo incrementa el valor de uno wn uno 
//REDUCIR EL VALOR DE UNA VARIABLE
var numeroDeEstudiantes = 256;
numeroDeEstudiantes = numeroDeEstudiantes - 1;

numeroDeEstudiantes--;

//ASIGNACIÓN DE SUMA
var a = 23;
a += 5; //podemos sumar cualquier cantidad con esta sintaxis.

var totalVentas = 17567.34;
totalVentas += 345.67;

//ASIGNACIÓN DE RESTA
var b = 23;
b -= 3; //podemos restar cualquir cantidad con esta sintaxis

var totalDeuda = 2446;
totalDeuda -= 345;

//ASIGNACIÓN DE MULTIPLICACIÓN
var c = 23;
c *= 2; //podemos multiplicar cualquir cantidad con esta sintaxis

var salario = 45000;
salario *= 5;

//ASIGNACIÓN DE DIVISIÓN
var d = 39;
d /= 3; //podemos dividir cualquier valor con esta sintaxis

var salario = 45000;
salario /= 2; 

//VARIABLES CON CADENA DE CARÁCTERES
var nombre = "Alan" //la cadena de caracteres se rodean con comillas dobles o simples 
var apellido = "Turing"

//ESCAPAR COMILLAS EN CADENA DE CARÁCTERES
var cadena = "soy una cadena de carácteres "con comillas""; //se nos presenta un error porque intentemos incluir comillas dentro de una cadena de carácteres 
var cadena = "soy una cadena de carácteres \"con comillas\""; //si ponemos una barra invertira antes de las comillas si podemos añadirlas dentro de la cadena de carácteres 

//CADENA DE CARÁCTERES CON COMILLAS SIMPLES
var miMeta; 
miMeta = 'aprender a "programar"'; //se pueden poner las comillas dovles denteo de la cadena de caracteres cuando esta se hace con comillas simples o viceversa 
miMeta = "aprender a 'programar'";

/*SECUENCIA DE ESCAPE
combinación de caracteres que no se representan a si mismos en una cadena de caracteres, asi como lo hicimos con las comillas simples y dobles anteriormente.

código | resultado
-------------------
\'       comilla simple
\"       comillas dobles
\\       barra invertida
\n       linea nueva
\r       retorno de carro
\t       tabulación
\b       retroceso
\f       salto de pagina
...
*/
//EJEMPLOS 
console.log("estoy aprendiendo \"javascript\"");

console.log("estoy aprendiendo \\javascript\\");

console.log("estoy aprendiendo \njavascript\n");

//CONCATENAR CADENA DE CARACTERES
var nombreCompleto = "Alan " + "Turing"; //podemos concatener cademas de caracteres usando el símbolo "+"

//CONSTRUIR CADENAS COM VARIABLES 
var verbo = "programar";
var mensaje = "estoy aprendiendo a " + verbo; //asi podemos juntar una cadena de caracteres con variables 

//AGREGAR VARIABLES A CADENA DE CARÁCTERES
var mensajeCompleto = "estoy aprendiendo a programar ";
var parteFinal ="de autodidacta";
mensajeCompleto += parteFinal; //asi podemos concatenar una cadena de caracteres que esten en diferentes variables.

//LONGITUD DE UNA CADENA DE CARACTERES
var miCadena;
miCadena = "JavaScript";
console.log(miCadena.lenght); //si colocamos ".lenght" al lado del nombre de la variable nos dirá la cantidad de caracteres que tiene esa cadena en específico.

//NOTACIÓN DE CORCHETES: primer carácter.
var lenguajeDeProgramacion = "JavaScript";

/*
Cadena:   J a v a S c r i p t
Índices:  0 1 2 3 4 5 6 7 8 9
*/


//cada cadena de caracteres tiene un indice asociado, que comienza en cero y se incremeta en ino por cada carácter hacia la derecha.
console.log(lenguajeDeProgramacion[0])

//INMUTABILIDAD DE CADENA DE CARACTERES
//son cadenas de caracteres que no se pueden cambiar.
var miCadena = "jola, mundo";
console.log(miCadena);
miCadena[0] = "H"; //Error
miCadena = "hola, mundo"; //manera correcta
//si quieres corregir un error debes cambiar toda la cadena de caracteres.

//NOTACIÓN DE CORCHETES: encimo caracter
var miCadena = "JavaScript";
console.log(miCadena[5]) // "S"
console.log(miCadena[0]) // "J"
console.log(miCadena[10]) //undefined

//NOTACIÓN DE CORCHETES: ultimo carácter






















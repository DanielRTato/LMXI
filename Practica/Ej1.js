/*// escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.          
let nombre = prompt("escribe tu nombre");
let saludo = "Hola "+nombre;
console.log(saludo);

//pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres
let n1 = Number(prompt("Elige el primer número")) // o usar parseInt() o parseFloat()
let n2 = Number(prompt("Elige el segundo número"))
let n3 = Number(prompt("Elige el tercer número"))
let media = (n1 + n2 + n3) / 3
alert(media)

// Que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos .
// El script debe mostrar el consumo de combustible por kilómetro.
let km = parseFloat(prompt("Número de kilómetros recorridos"))
let litros = parseFloat(prompt("Número de litros consumidos"))
let resultado = litros / km
alert("Has consumido " + resultado + " l/km")

//Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
let horas = parseInt(prompt("introduce horas"))
let minutos = parseInt(prompt("introduce los minutos"))
let segundos = (horas*60*60) + (minutos * 60)
alert ("En segundos son : " + segundos)

//
let numero = parseInt(prompt("Introduce un número de dos digitos"))
let decena = numero / 10
let unidad = numero % 10
alert ("Decenas: " + parseInt(decena)+ "\nUnidades: " + unidad)
*/
//        
var comensales, papas, huevos, cebollas;
comensales = parseInt(prompt("Comensales"));
papas = comensales*200;
papas = papas/1000;    //en kilos
huevos = papas*5;
cebolla = papas*300;
console.log("Patatas " + papas+" kilos");
console.log("Huevos " + huevos);
console.log("Cebolla "+cebolla +" gramos");
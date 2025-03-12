//  JS es no tipado y  dinamico

console.log('Hola Mundo!') // asi se imprime por terminal
alert("Cuidado") // asi se muestra un mensaje
prompt('Dime tu nombre') // asi se pide un dato


//declarar variables
let edad = 16.5 //variable ambito bloque
var pokemonFav = "Charizard" //variable ambito funcion no se usa
const nombre = "Daniel" //constante

//variables simples
let nome = "Daniel" //string
let idade = 16 //number
let esMayor = true //boolean


let anos = prompt('Cuantos años tienes?') //por defecto es string
let anos1 = parseInt(prompt('Cuantos años tienes?')) //convierte a numero

//condicionales
 2==2 //true
 "2"===2 //false
2!=3 //true
2 !== 3 //true  + - * / % ** 

//buclues

for (let i = 0; i < 10; i++) {
    console.log(i)
}

while (true) {
    console.log("hola")
}

//funciones

function sumaNumeros (nim1, num2) {
    return num1 + num2
}



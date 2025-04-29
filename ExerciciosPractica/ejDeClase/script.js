// Selección de elementos del DOM
let boton = document.querySelector("#boton"); // Botón que genera la mano de cartas

// Etiquetas para mostrar los contadores de cada palo
let bastosLabel = document.querySelector("#bastos");
let copasLabel = document.querySelector("#copas");
let espadasLabel = document.querySelector("#espadas");
let ourosLabel = document.querySelector("#ouros");

// Selección de las imágenes de las cartas
let carta1 = document.querySelector("#carta1");
let carta2 = document.querySelector("#carta2");
let carta3 = document.querySelector("#carta3");
let carta4 = document.querySelector("#carta4");
let carta5 = document.querySelector("#carta5");
let carta6 = document.querySelector("#carta6");
let carta7 = document.querySelector("#carta7");

// Array que contiene todas las cartas seleccionadas
let cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];

// Contadores para cada palo
let contadorCopas = 0;
let contadorBastos = 0;
let contadorEspadas = 0;
let contadorOros = 0;

// Definición de los palos y números de las cartas
const paus = ["oro", "copa", "espada", "basto"]; // Palos de la baraja
const numeros = ["As", "2", "3", "4", "5", "6", "7", "Sota", "Cabalo", "Rei"]; // Números y figuras de las cartas

// Evento que se ejecuta al hacer clic en el botón
boton.addEventListener("click", xerarMan); // Llama a la función `xerarMan` para generar una mano de cartas

// Función para generar una carta aleatoria
function xerarCartaAleatoria() {
    // Selección aleatoria de un palo
    randomPau = paus[Math.floor(Math.random() * paus.length)];
    // Selección aleatoria de un número
    randomIndice = Math.floor(Math.random() * numeros.length);
    randomNumero = numeros[randomIndice];
    // Retorna un objeto que representa la carta generada
    return {
        pau: randomPau, // Palo de la carta
        numero: randomNumero, // Número o figura de la carta
        nome: randomNumero + " de " + randomPau, // Nombre completo de la carta
        ruta: "baralla/" + randomPau + (randomIndice + 1) + ".png" // Ruta de la imagen de la carta
    };
}

// Función para generar una mano de cartas
function xerarMan() {
    // Reiniciar los contadores de cada palo
    contadorBastos = 0;
    contadorCopas = 0;
    contadorEspadas = 0;
    contadorOros = 0;

    let man = []; // Array para almacenar las cartas generadas

    // Iterar sobre las cartas visibles en el DOM
    for (carta of cartas) {
        let novaCarta = xerarCartaAleatoria(); // Generar una carta aleatoria
        man.push(novaCarta); // Añadir la carta generada al array `man`
        carta.src = novaCarta.ruta; // Actualizar la imagen de la carta en el DOM

        // Incrementar el contador correspondiente al palo de la carta
        if (novaCarta.pau === "oro") {
            contadorOros++;
        } else if (novaCarta.pau === "basto") {
            contadorBastos++;
        } else if (novaCarta.pau === "copa") {
            contadorCopas++;
        } else if (novaCarta.pau === "espada") {
            contadorEspadas++;
        }
    }

    // Actualizar los contadores en el DOM
    espadasLabel.innerHTML = "ESPADAS: " + contadorEspadas;
    copasLabel.innerHTML = "COPAS: " + contadorCopas;
    ourosLabel.innerHTML = "OUROS: " + contadorOros;
    bastosLabel.innerHTML = "BASTOS: " + contadorBastos;
}
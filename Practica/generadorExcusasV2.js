const excusa = document.getElementById("excusa");
let enseñar = document.getElementById("enseñar")

const QUIENES = ["Q1", "Q2", "Q3"];
const ACCIONES = ["k1", "k2", "k3"];
const TIEMPOS = ["ayer", "hoy", "mañana"];
const contadorElement = document.getElementById("contador"); 

let favoritas = []

let contador = 0;




function opcionAleatoria(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function quien() {
  return opcionAleatoria(QUIENES);
}

function que() {
  return opcionAleatoria(ACCIONES);
}

function cuando() {
  return opcionAleatoria(TIEMPOS);
}

function generarExcusa() {
  contador ++
  excusa.innerHTML = quien() + " " + que() + " " + cuando();
  contadorElement.textContent = "Contador: " + contador;
}


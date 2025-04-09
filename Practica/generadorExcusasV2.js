const excusa = document.getElementById("excusa");
const QUIENES = ["Q1", "Q2", "Q3"];
const ACCIONES = ["k1", "k2", "k3"];
const TIEMPOS = ["ayer", "hoy", "mañana"];

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
  if (!excusa) {
    console.error("Elemento 'excusa' no encontrado");
    return;
  }
  excusa.innerHTML = quien() + " " + que() + " " + cuando();}


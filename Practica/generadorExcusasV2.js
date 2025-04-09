let excusa = document.getElementById("excusa")


function opcionAleatorio (array){
    return array[(Math.floor(Math.random()*array.length))]
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

function generarExcusa(){
    excusa.innerHTML = quien()+ " " + " " +  que() + " " + cuando()
}


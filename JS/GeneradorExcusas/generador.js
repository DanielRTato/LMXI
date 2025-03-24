function aleatorio(array){

    return array[(Math.floor(Math.random()*array.length))];
}

function quien() {
    let quien = ["Una tortuga", "Mi abuela", "Un payaso"]

    return aleatorio(quien)
} 

function que() {
    let que = ["me robó", "me quemó", "me rompió"]

    return aleatorio(que)
}

function cuando() {
    let cuando = ["ayer", "hace un rato", "cuando estaba de vacaciones"];


    return aleatorio(cuando)
}

let botonGenerar = document.querySelector("#generar"); 
let frase = document.querySelector("#texto");

function generarExcusa() {
    frase.innerHTML = quien, que, cuando
}


botonGenerar.addEventListener("click", generarExcusa());
let quien = ["Una tortuga", "Mi abuela", "Un payaso"];
let que = ["me robó", "me quemó", "me rompió"];
let cuando = ["ayer", "hace un rato", "cuando estaba de vacaciones"];
let botonGenerar = document.querySelector("#generar"); // Renombrado para mayor claridad
let frase = document.querySelector("#respuesta");

function generarExcusa() {
    let quienIndex = Math.floor(Math.random() * quien.length);
    let queIndex = Math.floor(Math.random() * que.length);
    let cuandoIndex = Math.floor(Math.random() * cuando.length);

    let nuevaExcusa = quien[quienIndex] + " " + que[queIndex] + " " + cuando[cuandoIndex]; 
    console.log(nuevaExcusa);

    frase.innerHTML = nuevaExcusa; 
}

botonGenerar.addEventListener("click", generarExcusa);
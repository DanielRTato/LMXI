/*
let miObjeto = {}
let miArray = []
let Alumno = {
    nombre: "Pepe",
    apellidos: "Pérez",
    edad: 123,
    curso: "Web",
    pago: true,
}

Alumno.nombre
*/

let mih1 = document.querySelector("#nombre")

console.log(mih1)
mih1.style.color = "red"
mih1.innerHTML = "Adiós, buenas nochos"

// interactuar de manera dinámica 

function cambiarColor() {
    mih1.style.color = "blue"
}

mih1.addEventListener("click",cambiarColor)
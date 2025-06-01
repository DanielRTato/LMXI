// radiobottons con cada tipo
// un boton para generar un pokemon aleatorio de ese tipo
// y imprima su informacion
// endPoint https://pokeapi.co/api/v2/type/{id or name}/

let steel = document.getElementById('steel');
let water = document.getElementById('water');
let bug = document.getElementById('bug');
let dragon = document.getElementById('dragon');
let electric = document.getElementById('electric');
let ghost = document.getElementById('ghost');
let fire = document.getElementById('fire');
let fairy = document.getElementById('fairy');
let ice = document.getElementById('ice');
let fighting = document.getElementById('fighting');
let normal = document.getElementById('normal');
let grass = document.getElementById('grass');
let psychic = document.getElementById('psychic');
let rock = document.getElementById('rock');
let dark = document.getElementById('dark');
let ground = document.getElementById('ground');
let poison = document.getElementById('poison');
let flying = document.getElementById('flying');
let boton = document.getElementById('boton');
// pendiente
boton.addEventListener("click", generarPokemon) 
function generarPokemon() {
    let radios = document.getElementsByName("tipo")    

    let tipoSeleccionado = "";

    for (let radio of radios){
        if (radio.checked){
            tipoSeleccionado = radio.value;
        }
    }
        console.log(tipoSeleccionado);
fetch(`https://pokeapi.co/api/v2/type/${tipoSeleccionado}`)
    .then(respuestaCorrecta)
    .catch(respuestaError);
}
    console.log(tipoSeleccionado);




function respuestaCorrecta(repuesta) {
    repuesta.json().then(imprimirData)
}

function imprimirData(data) {
    Math.floor(Math.random() * data.pokemon.length)
    console.log(data)
}

function respuestaError() {
    console.log("Error")
}
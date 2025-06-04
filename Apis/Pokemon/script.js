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
boton.addEventListener("click", generarPokemon) 

function generarPokemon() {
    let radios = document.getElementsByName("tipo")    

    let tipoSeleccionado = "";

    for (let radio of radios){
        if (radio.checked){ // Si el radio button esta seleccionado 
            tipoSeleccionado = radio.value; // Guardamos el valor del radio button
        }
    }
    console.log(tipoSeleccionado);
fetch(`https://pokeapi.co/api/v2/type/` + tipoSeleccionado)
    .then(respuestaCorrecta)
    .catch(respuestaError);
}
    
function respuestaCorrecta(repuesta) {
    repuesta.json().then(imprimirData)
}

function imprimirData(data) {
    const numeroAleatorio = Math.floor(Math.random() * data.pokemon.length);
    const pokemon = data.pokemon[numeroAleatorio].pokemon;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/` + pokemon.name)
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
        .then(respuestaPokemon)
        .catch(respuestaError);
}

function respuestaPokemon(respuesta) {
    respuesta.json().then(mostrarPokemon);
}

function mostrarPokemon(pokemonData) {
    // Actualizar el nombre
    document.querySelector('h1').textContent = "Nombre: " + pokemonData.name;

    // Actualizar la imagen
    document.getElementById('pokemon-image').src = pokemonData.sprites.front_default;

    // Actualizar las características
    document.getElementById('pokemon-height').textContent = pokemonData.height + " m";
    document.getElementById('pokemon-weight').textContent = pokemonData.weight + " kg";

    // Formatear los tipos
    var tipos = pokemonData.types.map(function(type) {
        return type.type.name;
    }).join(', ');
    document.getElementById('pokemon-types').textContent = tipos;

    // Formatear las habilidades
    var habilidades = pokemonData.abilities.map(function(ability) {
        return ability.ability.name;
    }).join(', ');
    document.getElementById('pokemon-abilities').textContent = habilidades;

    console.log(pokemonData);
}


function respuestaError() {
    console.log("Error")
}
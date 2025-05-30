fetch ('https://pokeapi.co/api/v2/pokemon', {method: 'GET'})
    .then(respuestaCorrecta)
    .catch(respuestaError)

function respuestaCorrecta(repuesta) {
    repuesta.json().then(imprimirData)
}

function imprimirData(data) {
    console.log(data)
}

function respuestaError() {
    console.log("Error")
}
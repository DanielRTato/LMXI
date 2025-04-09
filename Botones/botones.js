let button = document.querySelector(".boton1");
let audio = document.querySelector("audio");

button.addEventListener("click",emitSound)

function emitSound() {
    audio.currentTime = 0;
    audio.play();
}

//ejemplo de interruptor

function mostrarImagenClicada() { 
    const imagen = document.querySelector("img.clickada")

    if (imagen.style.dispplay ==="block"){
        imagen.style.dispplay == "none"
    } else{
        imagen.style.dispplay = "block"
    }
}
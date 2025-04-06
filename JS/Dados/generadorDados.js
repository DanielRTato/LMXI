function tirarDado(){
    const boton = document.getElementById("boton");
    boton.disabled = true;
    //forma cutre para dejar que el sonido se reproduzca entero
    setTimeout(() => {
        boton.disabled = false;
    }, 1000);


    const numDados = document.getElementById("numDados").value
    const resultado = document.getElementById("resultado")
    const imagenes = document.getElementById("imagenes")
    const valores = []
    const imagenesDados = []

    new Audio('img/rolling-dice.mp3').play();

    for(let i = 0; i <numDados; i++){
        const valor = Math.floor(Math.random() * 6) + 1; //Math.floor() redondea hacia abajo asi que sumo 1 
        console.log(valor) //borrar
        valores.push(valor)
        imagenesDados.push(`<img src="img/${valor}.png">`)

    }
    console.log(valores) //borrar
    
    
    resultado.textContent =  `Resultado: ${valores.join(', ')}`;
    imagenes.innerHTML = imagenesDados.join('')

    

}
function toggleModoOscuro() {
    const body = document.body;
    const boton = document.getElementById("modoOscuro");

    body.classList.toggle('modo-oscuro');

    if (body.classList.contains('modo-oscuro')) {
        boton.textContent = '☀️ Modo Claro';
    } else {
        boton.textContent = '🌙 Modo Oscuro';
    }
}

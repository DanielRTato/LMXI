function tirarDado(){

    const numDados = document.getElementById("numDados").value
    const resultado = document.getElementById("resultado")
    const imagenes = document.getElementById("imagenes")
    const valores = []
    const imagenesDados = []

    for(let i = 0; i <numDados; i++){
        const valor = Math.floor(Math.random() * 6) + 1; //Math.floor() redondea hacia abajo asi que sumo 1 
        console.log(valor) //borrar
        valores.push(valor)
        imagenesDados.push(`<img src="img/${valor}.png">`)

    }
    console.log(valores) //borrar

    resultado.textContent =  `Dado: ${valores.join(', ')}`;
    imagenes.innerHTML = imagenesDados.join('')

}


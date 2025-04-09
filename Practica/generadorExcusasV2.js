let excusa = document.getElementById("excusa")


function opcionAleatorio (array){
    return array[(Math.floor(Math.random()*array.length))]
}

function quien (){
    let quien = ["Q1" ,"Q2" ,"Q3"]
return opcionAleatorio(quien)
}

function que() {
    let que = ["k1", "k2", "k3"]
return opcionAleatorio(que)
}
function cuando() {
    let cuando = ["ayer", "hoy", "mañana"]
return opcionAleatorio (cuando)
}

function generarExcusa(){
    excusa.innerHTML = quien()+ " " + " " +  que() + " " + cuando()
}


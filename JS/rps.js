function piedraPapelTijero(numeroJuagador) {
    let resultado = "";
    while (resultado != "piedra" && resultado != "papel" && resultado != "tijera") {
        resultado = prompt("Jugador " + numeroJuagador + " Elige piedra, papel o tijera");
    }
    return resultado;
}

function decidirGanador(manop1, manop2) {
    let mensaje = "";

    if ((manop1 === "piedra" && manop2 === "tijera") || (manop1 === "papel" && manop2 === "piedra") || (manop1 === "tijera" && manop2 === "papel")) {
        mensaje = "Gana el Player 1";
    } else if ((manop1 === "piedra" && manop2 === "papel") || (manop1 === "papel" && manop2 === "tijera") || (manop1 === "tijera" && manop2 === "piedra")) {
        mensaje = "Gana el Player 2";
    } else {
        mensaje = "Empate";
    }
    return mensaje;
}
let p1 = piedraPapelTijero(1)
let p2 = piedraPapelTijero(2)

alert(decidirGanador(p1, p2))   
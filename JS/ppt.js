// juego de piedra papel o tijera al mejor de 3

function pideMano() {
    var player1 = prompt("Elige piedra, papel o tijera");
    var player2 = prompt("Elige piedra, papel o tijera");
    
    return [player1, player2];
}

let victoriasP1 = 0;
let victoriasP2 = 0;

while (victoriasP1 < 2 && victoriasP2 < 2) {
    let [manoP1, manoP2] = pideMano();

    if ((manoP1 !== "piedra" && manoP1 !== "papel" && manoP1 !== "tijera") || (manoP2 !== "piedra" && manoP2 !== "papel" && manoP2 !== "tijera")) {
        alert("Error en la entrada, por favor elige piedra, papel o tijera.");
    } else if (manoP1 === manoP2) {
        alert("Empate");
    } else if ((manoP1 === "piedra" && manoP2 === "tijera") || (manoP1 === "papel" && manoP2 === "piedra") || (manoP1 === "tijera" && manoP2 === "papel")) {
        alert("Gana el Player 1");
        victoriasP1++;
    } else {
        alert("Gana el Player 2");
        victoriasP2++;
    }
}

if (victoriasP1 === 2) {
    alert("Player 1 gana");
} else {
    alert("Player 2 gana");
}

/* 
Control + k +c para comentar todo
Control + k + u para descomentar todo

    let [manoP1, manoP2] = pideMano()

    if ((manoP1 !== "piedra" && manoP1 !== "papel" && manoP1 !== "tijera") || (manoP2 !== "piedra" && manoP2 !== "papel" && manoP2 !== "tijera")) {
        alert("Error");
    } else if (manoP1 === manoP2) {
        alert("Empate");
    } else if ((manoP1 === "piedra" && manoP2 === "tijera") || (manoP1 === "papel" && manoP2 === "piedra") || (manoP1 === "tijera" && manoP2 === "papel")) {
        alert("Gana el Player 1");
    } else {
        alert("Gana el Player 2");
    }   
        */
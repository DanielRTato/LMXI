// Crear un array con todas las cartas de la baraja y funciones para manejar la mano y baraja.

function crearBaraja() {
    let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "sota", "caballo", "rey"];
    let palos = ["espadas", "bastos", "copas", "oros"];
    let baraja = [];

    for (let i = 0; i < valores.length; i++) {
        for (let j = 0; j < palos.length; j++) {
            baraja.push([valores[i], palos[j]]);
        }
    }

    return baraja;
}

function barajar(baraja) {
    baraja.sort(() => Math.random() - 0.5);
}

function crearMano(baraja) {
    let mano = [];
    for (let i = 0; i < 5; i++) {
        let carta = baraja.splice(Math.floor(Math.random() * baraja.length), 1)[0];
        mano.push(carta);
    }
    return mano;
}

function robar(baraja, mano) {
    if (baraja.length > 0) {
        let carta = baraja.shift();
        mano.unshift(carta);
    } else {
        console.log("La baraja está vacía, no se puede robar.");
    }
}

function robarAleatoria(baraja, mano) {
    if (baraja.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * baraja.length);
        let cartaSeleccionada = baraja.splice(indiceAleatorio, 1)[0];
        mano.unshift(cartaSeleccionada);
    } else {
        console.log("La baraja está vacía, no se puede robar una carta aleatoria.");
    }
}

// Ejemplo de uso
let baraja = crearBaraja();
barajar(baraja);
console.log("Baraja mezclada:", baraja);

let mano = crearMano(baraja);
console.log("Mano inicial:", mano);

robar(baraja, mano);
console.log("Mano después de robar una carta:", mano);
console.log("Baraja después de robar una carta:", baraja);

robarAleatoria(baraja, mano);
console.log("Mano después de robar una carta aleatoria:", mano);
console.log("Baraja después de robar una carta aleatoria:", baraja);

// Definición de los palos de la baraja española
const palos = ["Oros", "Copas", "Espadas", "Bastos"];

// Variables globales
let barajaEspañola = []; // Contendrá todas las cartas de la baraja
let mano = []; // Contendrá las cartas que el jugador ha robado

// Generar la baraja española
for (let palo of palos) { // Iterar sobre cada palo
    for (let numero = 1; numero <= 10; numero++) { // Iterar sobre los números del 1 al 10
        if (numero === 1) { 
            barajaEspañola.push(["As", palo]); // Añadir el As
        } else if (numero === 8) { 
            barajaEspañola.push(["Sota", palo]); // Añadir la Sota
        } else if (numero === 9) { 
            barajaEspañola.push(["Caballo", palo]); // Añadir el Caballo
        } else if (numero === 10) { 
            barajaEspañola.push(["Rey", palo]); // Añadir el Rey
        } else {
            barajaEspañola.push([String(numero), palo]); // Añadir las cartas numéricas
        }
    }
}

// Función para barajar la baraja
function barajar(baraja) {
    baraja.sort(() => Math.random() - 0.5); // Mezclar las cartas de forma aleatoria
}

// Función para robar la primera carta del mazo
function robar(baraja, mano) {
    if (baraja.length > 0) { // Verificar si quedan cartas en el mazo
        mano.unshift(baraja[0]); // Añadir la primera carta del mazo a la mano
        baraja.shift(); // Eliminar la primera carta del mazo
    } else {
        alert("No quedan cartas en el mazo."); // Mostrar un mensaje si el mazo está vacío
    }
}

// Función para robar una carta aleatoria del mazo
function robarAleatoria(baraja, mano) {
    if (baraja.length > 0) { // Verificar si quedan cartas en el mazo
        let cartaSeleccionada = Math.floor(Math.random() * baraja.length); // Seleccionar una carta aleatoria
        mano.unshift(baraja[cartaSeleccionada]); // Añadir la carta seleccionada a la mano
        baraja.splice(cartaSeleccionada, 1); // Eliminar la carta seleccionada del mazo
    } else {
        alert("No quedan cartas en el mazo."); // Mostrar un mensaje si el mazo está vacío
    }
}

// Función para actualizar la vista en el HTML
function actualizarVista() {
    document.getElementById("mazo").textContent = JSON.stringify(barajaEspañola, null, 2); // Mostrar el mazo restante
    document.getElementById("mano").textContent = JSON.stringify(mano, null, 2); // Mostrar las cartas en la mano
}

// Inicializar la baraja y actualizar la vista
barajar(barajaEspañola); // Barajar la baraja al inicio
actualizarVista(); // Mostrar el estado inicial de la baraja y la mano

// Ejemplo de acciones iniciales
robar(barajaEspañola, mano); // Robar la primera carta
actualizarVista(); // Actualizar la vista

robarAleatoria(barajaEspañola, mano); // Robar una carta aleatoria
actualizarVista(); // Actualizar la vista

robar(barajaEspañola, mano); // Robar otra carta
actualizarVista(); // Actualizar la vista

// Mostrar el estado final en la consola
console.log("Mazo restante: ", barajaEspañola); // Mostrar las cartas restantes en el mazo
console.log("Mano: ", mano); // Mostrar las cartas en la mano
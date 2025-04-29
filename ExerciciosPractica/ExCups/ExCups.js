// Variables del juego
let vasoConMoneda;
let aciertos = 0;
let fallos = 0;

// Elementos del DOM
const vasos = document.querySelectorAll('.vaso');
const moneda = document.getElementById('moneda');
const contadorAciertos = document.getElementById('aciertos');
const contadorFallos = document.getElementById('fallos');
const botonReset = document.getElementById('botonReset');

// Función para colocar la moneda en un vaso aleatorio
function colocarMoneda() {
    // Escondemos la moneda primero
    moneda.style.display = 'none';
    
    // Elegimos un vaso al azar (0, 1 o 2)
    vasoConMoneda = Math.floor(Math.random() * 3);
    
    // Habilitamos todos los vasos
    vasos.forEach(vaso => {
        vaso.style.display = 'block';
    });
}

// Función para manejar el clic en un vaso
function comprobarVaso(e) {
    const vasoClicado = e.target;
    const idVaso = vasoClicado.id;
    
    // Comprobamos si es el vaso correcto
    if (idVaso === `vaso${vasoConMoneda + 1}`) {
        // Mostramos la moneda
        const rect = vasoClicado.getBoundingClientRect();
        moneda.style.left = `${rect.left + 25}px`;
        moneda.style.top = `${rect.top + 50}px`;
        moneda.style.display = 'block';
        
        // Aumentamos aciertos
        aciertos++;
        contadorAciertos.textContent = aciertos;
        
        // Deshabilitamos los otros vasos
        vasos.forEach(vaso => {
            if (vaso.id !== idVaso) {
                vaso.style.display = 'none';
            }
        });
    } else {
        // Escondemos el vaso clicado (fallo)
        vasoClicado.style.display = 'none';
        
        // Aumentamos fallos
        fallos++;
        contadorFallos.textContent = fallos;
    }
}

// Event listeners
vasos.forEach(vaso => {
    vaso.addEventListener('click', comprobarVaso);
});

botonReset.addEventListener('click', () => {
    colocarMoneda();
});

// Iniciamos el juego
colocarMoneda();
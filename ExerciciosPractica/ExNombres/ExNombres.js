// Definimos los nombres de lucha según la primera letra
const nombresLucha = {
    'A': 'Pantera', 'B': 'Muerte', 'C': 'Barriga', 'D': 'Tormenta', 
    'E': 'Máscara', 'F': 'Nalga', 'G': 'Gacela', 'H': 'Tempestad',
    'I': 'Sombra', 'J': 'Barba', 'K': 'Gacela', 'L': 'Bestia', 
    'M': 'Venganza', 'N': 'Capibara', 'O': 'Florecilla', 'P': 'Águila',
    'Q': 'Juventud', 'R': 'Estrella', 'S': 'Serpiente', 'T': 'Fuerza',
    'U': 'Masacre', 'V': 'Niebla', 'W': 'Masa', 'X': 'Greña',
    'Y': 'Pesadilla', 'Z': 'Quimera'
};

const apellidosLucha = {
    'A': 'Desnuda', 'B': 'Dorada', 'C': 'Sanguinaria', 'D': 'Letal',
    'E': 'Sexy', 'F': 'Demoníaca', 'G': 'Flácida', 'H': 'Implacable',
    'I': 'Destructora', 'J': 'Veloz', 'K': 'Plateada', 'L': 'Suicida',
    'M': 'Bailonga', 'N': 'Mugrienta', 'O': 'Amorosa', 'P': 'Infernal',
    'Q': 'del Espacio', 'R': 'Salvaje', 'S': 'Fornida', 'T': 'Colosal',
    'U': 'Feroz', 'V': 'del Abismo', 'W': 'Rocosa', 'X': 'Fiestera',
    'Y': 'Fantasmal', 'Z': 'Voladora'
};

// Obtenemos los elementos del DOM
const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const botonGenerar = document.getElementById('generar');
const resultado = document.getElementById('resultado');

// Función para generar el nombre de lucha
function generarNombreLucha() {
    // Obtenemos el nombre y apellido
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    
    // Validamos que se hayan ingresado valores
    if (!nombre || !apellido) {
        alert('Por favor ingresa tu nombre y apellido');
        return;
    }
    
    // Obtenemos la primera letra de cada uno (en mayúscula)
    const primeraLetraNombre = nombre[0].toUpperCase();
    const primeraLetraApellido = apellido[0].toUpperCase();
    
    // Buscamos en nuestros objetos el nombre correspondiente
    const nombreLucha = nombresLucha[primeraLetraNombre] || 'El/La';
    const apellidoLucha = apellidosLucha[primeraLetraApellido] || 'Misterioso/a';
    
    // Mostramos el resultado
    resultado.textContent = `${nombreLucha} ${apellidoLucha}`;
    resultado.style.display = 'block';
}

// Evento al hacer clic en el botón
botonGenerar.addEventListener('click', generarNombreLucha);

// También podemos permitir usar la tecla Enter
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generarNombreLucha();
    }
});
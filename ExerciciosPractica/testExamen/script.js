// Datos de los estudiantes: frases e imágenes (simuladas)
const estudiantes = [
    {
        nombre: "Ana",
        frase: "Prefiero Java a JavaScript",
        imagen: "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
        nombre: "Luis",
        frase: "Me encanta depurar código",
        imagen: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        nombre: "Marta",
        frase: "Odio el café",
        imagen: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        nombre: "Carlos",
        frase: "Las pruebas unitarias son inútiles",
        imagen: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        nombre: "Tú",  // ¡Cambia esto por tu nombre!
        frase: "No me gusta programar",  // Cambia por tu frase
        imagen: "https://randomuser.me/api/portraits/men/22.jpg"  // Pon tu imagen
    }
];

// Elementos del DOM
const fraseElement = document.getElementById("frase");
const imagenElement = document.getElementById("imagen");
const generarBtn = document.getElementById("generarBtn");

// Función para generar una frase aleatoria
function generarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * estudiantes.length);
    const estudiante = estudiantes[indiceAleatorio];
    console.log(estudiante);
    
    fraseElement.textContent = `${estudiante.nombre} nunca diría: "${estudiante.frase}"`;
    imagenElement.src = estudiante.imagen;
    imagenElement.alt = `Foto de ${estudiante.nombre}`;
}

// Evento al cargar la página (opcional)
window.addEventListener("load", generarFraseAleatoria);

// Evento al hacer clic en el botón
generarBtn.addEventListener("click", generarFraseAleatoria);
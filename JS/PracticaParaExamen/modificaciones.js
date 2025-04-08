// Modificar el contenido de un elemento
//innerHTML permite cambiar el contenido HTML dentro de una etiqueta.
document.getElementById("contenido").innerHTML = "Hola desde JS!"

// Cambiar estilos (CSS) de un elemento
// Puedes acceder a los estilos como si fueran propiedades de un objeto.
document.getElementById("colorTexto").style.color = "red"
document.getElementById("colorTexto").style.fontSize = "20px"

// Cambiar atributos de una etiqueta
// Se usa para cambiar cualquier atributo (src, href, value, etc).
document.getElementById("miImagen").src = "imagen1.jpg" // esto no lo entiendo
document.getElementById("miImagen").width = 200;

// Ocultar o mostrar elementos
// Puedes usar display, visibility o opacity para controlar si un elemento se ve o no.
document.getElementById("parrafo").style.display = "none"; // Oculta
// document.getElementById("parrafo").style.display = "block"; // Muestra


// Añadir nuevos elementos al HTML
// Muy útil para añadir contenido dinámicamente, como niveles de un juego, comentarios, etc.
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Soy un nuevo párrafo";
document.getElementById("contenedor").appendChild(nuevoParrafo);

// Eliminar elementos
// También se puede usar parent.removeChild(hijo) si necesitas más control.
let elemento = document.getElementById("borrarme");
elemento.remove();

// Modificar formularios y sus valores
// Usado para leer o modificar datos de formularios (como cambiar valores predefinidos).
document.getElementById("nombre").value = "Ana";
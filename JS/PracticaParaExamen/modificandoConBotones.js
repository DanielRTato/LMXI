function cambiarContenido() {
    document.getElementById("miParrafo").innerHTML = "¡Contenido cambiado!";
  }

  function cambiarEstilo() {
    let parrafo = document.getElementById("miParrafo");
    parrafo.style.color = "blue";
    parrafo.style.fontWeight = "bold";
  }

  function cambiarAtributo() {
    document.getElementById("miImagen").src = "dsf";
  }

  function ocultar() {
    document.getElementById("miParrafo").style.display = "none";
  }

  function mostrar() {
    document.getElementById("miParrafo").style.display = "block";
  }

  function crearElemento() {
    let nuevo = document.createElement("p");
    nuevo.textContent = "Soy un párrafo nuevo!";
    document.getElementById("contenedor").appendChild(nuevo);
  }

  function eliminarElemento() {
    let titulo = document.getElementById("miTitulo");
    if (titulo) titulo.remove();
  }

  function modificarInput() {
    document.getElementById("miInput").value = "Modificado con JS";
  }
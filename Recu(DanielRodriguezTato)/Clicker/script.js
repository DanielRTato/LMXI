
let contador = 0;
let x = 1;


const contadorElemento = document.getElementById("contador");
const valorXElemento = document.getElementById("valorX");


function actualizarContador() {
    contadorElemento.textContent = contador;
}

function actualizarValorX() {
    valorXElemento.textContent = x;
}

function botonClick() {
    contador += x;
    actualizarContador();
};

function botonMas1() {
    if (contador >= 100) {
        contador -= 100;
        x += 1;
        actualizarContador();
        actualizarValorX();
    } else {
        alert("No tienes creditos para comprar esta mejora");
    }
};

function botonPor2() {
    if (contador >= 1000) {
        contador -= 1000;
        x *= 2;
        actualizarContador();
        actualizarValorX();
    } else {
        alert("No tienes creditos para comprar esta mejora");
    }
};

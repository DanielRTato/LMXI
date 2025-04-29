let contador = 0;
const aumentar = document.getElementById("aumentar");
const restar = document.getElementById("restar");
const reset = document.getElementById("reset");
const resultado = document.getElementById("valor");

function aumenta() {
    contador++;
    resultado.innerHTML = contador;
    resultado.style.color = "green";
    
}

function resta() {
    contador--;
    resultado.innerHTML = contador;
    resultado.style.color = "red";

} 

function resetear() {
    contador = 0;
    resultado.innerHTML = contador;
    resultado.style.color = "black";
}
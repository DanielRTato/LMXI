let manoBranco = [];
let manoVermello = [];
let manoAzul = [];
let manoAmarelo = [];

function tirarDados(){
    let dado1 = 0;
    let dado2 = 0
    dado1 = Math.floor(Math.random()*6) + 1;
    dado2 = Math.floor(Math.random()*6) + 1;
    let suma = dado1 + dado2;
    console.log(suma)
    return suma;
}

const tablero = [
    {numero: 2, recurso: ovella, players: ["vermello"] },
    {numero: 3, recurso: madeira, players: ["branco"] },
    {numero: 3, recurso: pedra, players: ["azul","amarelo"] },
    {numero: 4, recurso: ovellas, players: ["amarello"] },
    {numero: 4, recurso: trigo, players: ["azul","amarelo"] },
    {numero: 5, recurso: ovella, players: ["azul"] },
    {numero: 5, recurso: barro, players: ["azul"] },
    {numero: 6, recurso: barro, players: ["vermello","branco"] },
    {numero: 6, recurso: trigo, players: ["amarelo"] },
    {numero: 8, recurso: pedra, players: ["branco"] },
    {numero: 8, recurso: madeira, players: ["vermello", "azul"] },
    {numero: 9, recurso: madeira, players: ["amarelo"] },
    {numero: 9, recurso: trigo, players: ["vermello", "branco"] },
    {numero: 10, recurso: pedra, players: ["vermello"] },
    {numero: 10, recurso: barro, players: ["amarelo"] },
    {numero: 11, recurso: madeira, players: ["vermello", "branco"] },
    {numero: 11, recurso: ovella, players: ["amarelo", "azul"] },
    {numero: 12, recurso: trigo, players: ["branco"] },












    
]
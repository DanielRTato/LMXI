let manoBranco = [];
let manoVermello = [];
let manoAzul = [];
let manoAmarelo = [];

const manos = {
  branco: manoBranco,
  vermello: manoVermello,
  azul: manoAzul,
  amarelo: manoAmarelo
};

const tablero = [
  { numero: 2, recurso: "ovella", players: ["vermello"] },
  { numero: 3, recurso: "madeira", players: ["branco"] },
  { numero: 3, recurso: "pedra", players: ["azul", "amarelo"] },
  { numero: 4, recurso: "ovella", players: ["amarelo"] },
  { numero: 4, recurso: "trigo", players: ["azul", "amarelo"] },
  { numero: 5, recurso: "ovella", players: ["azul"] },
  { numero: 5, recurso: "barro", players: ["azul"] },
  { numero: 6, recurso: "barro", players: ["vermello", "branco"] },
  { numero: 6, recurso: "trigo", players: ["amarelo"] },
  { numero: 8, recurso: "pedra", players: ["branco"] },
  { numero: 8, recurso: "madeira", players: ["vermello", "azul"] },
  { numero: 9, recurso: "madeira", players: ["amarelo"] },
  { numero: 9, recurso: "trigo", players: ["vermello", "branco"] },
  { numero: 10, recurso: "pedra", players: ["vermello"] },
  { numero: 10, recurso: "barro", players: ["amarelo"] },
  { numero: 11, recurso: "madeira", players: ["vermello", "branco"] },
  { numero: 11, recurso: "ovella", players: ["amarelo", "azul"] },
  { numero: 12, recurso: "trigo", players: ["branco"] },
];

function tirarDados() {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;
  console.log("🎲 Dados: " + dado1 + " + " + dado2 + " = " + suma);
  repartirRecursos(suma);
  actualizarManos(); // 👈 Mostrar resultados en pantalla
}

function repartirRecursos(numero) {
  for (let i = 0; i < tablero.length; i++) {
    if (tablero[i].numero === numero) {
      let jugadores = tablero[i].players;
      let recurso = tablero[i].recurso;

      for (let j = 0; j < jugadores.length; j++) {
        let nombre = jugadores[j];
        manos[nombre].push(recurso);
        console.log(`${nombre} recibe ${recurso}`);
      }
    }
  }
}

function actualizarManos() {
  document.querySelector(".manoBranco").innerHTML = "";
  for (let i = 0; i < manoBranco.length; i++) {
    document.querySelector(".manoBranco").innerHTML += '<img src="img/' + manoBranco[i] + '.png" width="40">';
  }

  document.querySelector(".manoVermello").innerHTML = "";
  for (let i = 0; i < manoVermello.length; i++) {
    document.querySelector(".manoVermello").innerHTML += '<img src="img/' + manoVermello[i] + '.png" width="40">';
  }

  document.querySelector(".manoAzul").innerHTML = "";
  for (let i = 0; i < manoAzul.length; i++) {
    document.querySelector(".manoAzul").innerHTML += '<img src="img/' + manoAzul[i] + '.png" width="40">';
  }

  document.querySelector(".manoAmarelo").innerHTML = "";
  for (let i = 0; i < manoAmarelo.length; i++) {
    document.querySelector(".manoAmarelo").innerHTML += '<img src="img/' + manoAmarelo[i] + '.png" width="40">';
  }
}


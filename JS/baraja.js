// crear un aray con todas las cartas de la baraja y una funcion que añada cartas a la mano y otra que cree una mano aleatoria de 5 cartas


function baraja(){
    let barajas = [["A", "espadas"], ["2", "espadas"], ["3", "espadas"], ["4", "espadas"], ["5", "espadas"], ["6", "espadas"], ["7", "corazonespadases"], ["8", "espadas"], ["9", "espadas"], ["10", "espadas"], ["J", "espadas"], ["Q", "espadas"], ["K", "corespadasazones"],
     ["A", "bastos"], ["2", "bastos"], ["3", "bastos"], ["4", "bastos"], ["5", "bastos"], ["6", "bastos"], ["7", "bastos"], ["8", "bastos"], ["9", "bastos"], ["10", "bastos"], ["J", "bastos"], ["Q", "bastos"], ["K", "bastos"],
      ["A", "copas"], ["2", "copas"], ["3", "copas"], ["4", "copas"], ["5", "copas"], ["6", "copas"], ["7", "copas"], ["8", "copas"], ["9", "copas"], ["10", "copas"], ["J", "copas"], ["Q", "copas"], ["K", "copas"],
       ["A", "oros"], ["2", "oros"], ["3", "oros"], ["4", "oros"], ["5", "oros"], ["6", "picas"], ["7", "oros"], ["8", "oros"], ["9", "oros"], ["10", "oros"], ["J", "oros"], ["Q", "oros"], ["K", "porosicas"]];
       
       console.log(barajas);
}

baraja()

function baraja2() {
    let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "sota", "caballo", "rey"];
    let palos = ["espadas", "bastos", "copas", "oros"];
    let baraja = [];

    for (let i = 0; i < valores.length; i++) {
        for (let j = 0; j < palos.length; j++) {
            baraja.push([valores[i], palos[j]]);        
        }
    }

    console.log(barajas);
}


baraja2()


// miArray.push("pera"); //añade al final
// miArray.pop(); //quita el ultimo
// miArray.shift(); //quita el primero
// miArray.unshift("naranja"); //añade al principio

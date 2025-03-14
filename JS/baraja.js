function baraja(){
    let barajas = [["A", "corazones"], ["2", "corazones"], ["3", "corazones"], ["4", "corazones"], ["5", "corazones"], ["6", "corazones"], ["7", "corazones"], ["8", "corazones"], ["9", "corazones"], ["10", "corazones"], ["J", "corazones"], ["Q", "corazones"], ["K", "corazones"],
     ["A", "diamantes"], ["2", "diamantes"], ["3", "diamantes"], ["4", "diamantes"], ["5", "diamantes"], ["6", "diamantes"], ["7", "diamantes"], ["8", "diamantes"], ["9", "diamantes"], ["10", "diamantes"], ["J", "diamantes"], ["Q", "diamantes"], ["K", "diamantes"],
      ["A", "treboles"], ["2", "treboles"], ["3", "treboles"], ["4", "treboles"], ["5", "treboles"], ["6", "treboles"], ["7", "treboles"], ["8", "treboles"], ["9", "treboles"], ["10", "treboles"], ["J", "treboles"], ["Q", "treboles"], ["K", "treboles"],
       ["A", "picas"], ["2", "picas"], ["3", "picas"], ["4", "picas"], ["5", "picas"], ["6", "picas"], ["7", "picas"], ["8", "picas"], ["9", "picas"], ["10", "picas"], ["J", "picas"], ["Q", "picas"], ["K", "picas"]];
       
       console.log(barajas);
}

baraja()

function baraja2() {
    let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let palos = ["corazones", "diamantes", "treboles", "picas"];
    let barajas = [];

    for (let i = 0; i < valores.length; i++) {
        for (let j = 0; j < palos.length; j++) {
            barajas.push([valores[i], palos[j]]);
        }
    }

    console.log(barajas);
}

baraja2()


// miArray.push("pera"); //añade al final
// miArray.pop(); //quita el ultimo
// miArray.shift(); //quita el primero
// miArray.unshift("naranja"); //añade al principio

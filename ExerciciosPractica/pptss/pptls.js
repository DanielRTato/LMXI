let pick1 = "";
let pick2;

// eleccion del player1
document.getElementById("rock1").onclick = function(){
    pick1 = "rock";
}
document.getElementById("Scissors1").onclick = function(){
    pick1 = "scissors";
}
document.getElementById("Spock1").onclick = function(){
    pick1 = "spock";
}
document.getElementById("Lizard1").onclick = function(){
    pick1 = "lizard";
}
document.getElementById("paper1").onclick = function(){
    pick1 = "paper";
}

// eleccion del player2
document.getElementById("rock2").onclick = function(){
    pick2 = "rock";
}
document.getElementById("Scissors2").onclick = function(){
    pick2 = "scissors";
}
document.getElementById("Spock2").onclick = function(){
    pick2 = "spock";
}
document.getElementById("Lizard2").onclick = function(){
    pick2 = "lizard";
}
document.getElementById("paper2").onclick = function(){
    pick2 = "paper";
}

document.getElementById("play").onclick = function() {
    const resultado = document.getElementById("resultado")

    if (pick1 && pick2){

        if(pick1===pick2){
            resultado.innerHTML = "EMPATE";
        }
            else if (pick1=="rock" && pick2=="lizard") {
                resultado.innerHTML += "Piedra aplasta lagarto\n Gaña o XOGADOR 1";
            }else if(pick1=="rock" && pick2 == "scissors") { 
                resultado.innerHTML = "Piedra aplasta tijera\n Gaña o XOGADOR 1"
            }
            
           else if(pick1=="lizard" && pick2=="spock"){
                resultado.innerHTML += "lagarto envenena Spock\n Gaña o XOGADOR 1"
            }else if(pick1=="lizard" && pick2=="paper"){
                resultado.innerHTML += "lagarto devora papel\n Gaña o XOGADOR 1"
            }
            
            else if(pick1=="spock" && pick2=="scissors") {
                resultado.innerHTML += "Spock rompe tijera\n Gaña o XOGADOR 1"
            }else if(pick1 =="spock" && pick2=="rock") {
                resultado.innerHTML += "Spock vaporiza piedra\n Gaña o XOGADOR 1"
            }
            
            else if (pick1=="scissors" && pick2 == "paper"){
                resultado.innerHTML += "Tijera cortal papel\n Gaña o XOGADOR 1"
            }else if(pick1=="scissors" && pick2 == "lizard") {
                resultado.innerHTML += "tijera decapita lagarto\n Gaña o XOGADOR 1"
            }
            
            else if (pick1 =="paper" && pick2 =="rock") { 
                resultado.innerHTML += "Papel envuelve piedra\n Gaña o XOGADOR 1"
            }else if(pick1=="paper" && pick2 == "spock") {
                resultado.innerHTML += "Papel desautoriza Spock\n Gaña o XOGADOR 1"
            }
            else {
                resultado.innerHTML += "Gana o XOGADOR 2";
            }
        }


};

function resetear() {
    location.reload(); // un poco cutre
  }

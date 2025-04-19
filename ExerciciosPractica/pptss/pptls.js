let pick1 = "";
let pick2;

// eleccion del player1
document.getElementById("rock").onclick = function(){
    pick1 = "rock";
}
document.getElementById("Scissors").onclick = function(){
    pick1 = "scissors";
}
document.getElementById("Spock").onclick = function(){
    pick1 = "spock";
}
document.getElementById("Lizard").onclick = function(){
    pick1 = "lizard";
}
document.getElementById("paper").onclick = function(){
    pick1 = "paper";
}

// eleccion del player2
document.getElementById("rock").onclick = function(){
    pick2 = "rock";
}
document.getElementById("Scissors").onclick = function(){
    pick2 = "scissors";
}
document.getElementById("Spock").onclick = function(){
    pick2 = "spock";
}
document.getElementById("Lizard").onclick = function(){
    pick2 = "lizard";
}
document.getElementById("paper").onclick = function(){
    pick2 = "paper";
}

document.getElementById("play").onclick = function{
    if (pick1 && pick2){
        if (pick1==rock & pick2==lizard) {
            document.getElementById("resultado").innerHTML += "Piedra aplasta lagarto\n Gaña o XOGADOR 1";
        }else if(pick1==rock & pick2 == scissors) { 
            document.getElementById("resultado").innerHTML += "Piedra aplasta tijera\n Gaña o XOGADOR 1"
        }
        
        if(pick1==lizard & pick2==spock){
            document.getElementById("resultado").innerHTML += "lagarto envenena Spock\n Gaña o XOGADOR 1"
        }else if(pick1==lizard & pick2==paper){
            document.getElementById("resultado").innerHTML += "lagarto devora papel\n Gaña o XOGADOR 1"
        }
        
        if(pick1=="spock" & pick2=="scissors") {
            document.getElementById("resultado").innerHTML += "Spock rompe tijera\n Gaña o XOGADOR 1"
        }else if(pick1 =="spock" & pick2=="rock") {
            document.getElementById("resultado").innerHTML += "Spock vaporiza piedra\n Gaña o XOGADOR 1"
        }
        
        if (pick1=="scissors" & pick2 == "paper"){
            document.getElementById("resultado").innerHTML += "Tijera cortal papel\n Gaña o XOGADOR 1"
        }else if(pick1=="scissors" & pick2 == "lizard") {
            document.getElementById("resultado").innerHTML += "tijera decapita lagarto\n Gaña o XOGADOR 1"
        }
        
        if (pick1 =="paper" & pick2 =="rock") { 
            document.getElementById("resultado").innerHTML += "Papel envuelve piedra\n Gaña o XOGADOR 1"
        }else if(pick1=="paper" & pick2 == "spock") {
            document.getElementById("resultado").innerHTML += "Papel desautoriza Spock\n Gaña o XOGADOR 1"
        }
        else {
            document.getElementById("resultado").innerHTML += "Gana o XOGADOR 2";
        }
    }


}


const alumnos = [
       
        { numero:1 ,nom:"Gedro", apell:"Ponzalez", frase:"Mañá veño a traballar en coche", ruta:"exercicio1exame/Pedro.jpg"},
       { numero:2 ,nom:"Mliver", apell:"Oiguez", frase:"Lisa simpson es una niña de mi cole",ruta:"exercicio1exame/Oliver.png" },
       {numero:3 ,nom:"Dorge", apell:"Juran", frase:"¿Unos FIFAS de mientras?", ruta:"exercicio1exame/Jorge.png" },
       {numero:4 ,nom:"Aaul", apell:"Slvarez", frase:"No vuelvo a beber", ruta:"exercicio1exame/SaulAlvarezMonzon.jpg "},
       { numero:5 ,nom:"Aima", apell:"Dparicio", frase:"Nicki Nicole si o no?", ruta:"exercicio1exame/Dima.jpeg" },
       {numero:6 ,nom:"Hamuel", apell:"Sermida", frase:"¿Unos métodos aCadea o que?", ruta:"exercicio1exame/samu.jpg" },
       {numero:7 ,nom:"Rscar", apell:"Oodriguez", frase:"Ser dios sería lo más, o si no ser el ser más inteligente sobre la tierra", ruta:"exercicio1exame/Oscar Rodriguez.jpg"},
       {numero:8 ,nom:"Aarly", apell:"Jlbarran", frase:"Putin", ruta:"exercicio1exame/Karly.jpg" },
       {numero:9 ,nom:"Mndrea", apell:"Aouriño", frase:"¿Un fort o que?", ruta:"exercicio1exame/AndreaMouriño.jpg" },
       {numero:10 ,nom:"Pavier", apell:"Jortela", frase:"Sin miedo al exito", ruta:"exercicio1exame/Javier.jpg" },
       {numero:11,nom:"Carlos", apell:"Costas", frase:"No sé qué poner", ruta:"exercicio1exame/Carlos.jpg" },
       {numero:12 ,nom:"Garay", apell:"Sarcia", frase:"Manin, que pedazo de aprobado en progra", ruta:"exercicio1exame/SarayGarcia.jpg" },
       {numero:13 ,nom:"Liero", apell:"Popez", frase:"¿Un brawl?", ruta:"exercicio1exame/Piero.jpg" },
       {numero:14 ,nom:"Tueben", apell:"Rorre", frase:"Yo era un aventurero como tú, hasta que recibí una flecha", ruta:"exercicio1exame/Rubén.jpeg" },
       {numero:15 ,nom:"Pran", apell:"Frego", frase:"¿Me puedo pirar ya?", ruta:"exercicio1exame/Fran.jpg"},
       {numero:16,nom:"Mael", apell:"Garcelino", frase:"Marichema no quiere venir a clase de pedro", ruta:"exercicio1exame/Hermo.png"},
       {numero:17 ,nom:"Hdrian", apell:"Aermo", frase:"Cristiano es mejor que messi", ruta:"exercicio1exame/Adrian Hermo.png" },
       {numero:18 ,nom:"Iavid", apell:"Dglesias", frase:"Salgo escupío por la puerta", ruta:"exercicio1exame/David Iglesias.jpg" },
       {numero:19 ,nom:"Faniel", apell:"Digueroa", frase:"Voy a dejar el CandyCrush", ruta:"exercicio1exame/DanielFigueroa.jpg" },
       {numero:20 ,nom:"Aiguel", apell:"Mmboage", frase:"Pedro Sánchez dimisión", ruta:"exercicio1exame/Miguel.png"},
       {numero:21 ,nom:"Sorja", apell:"Baa", frase:"Nooooooo la poliziaa", ruta:"exercicio1exame/Borja.jpeg" },
       {numero:22 ,nom:"Gvan", apell:"Guitierrez", frase:"La ira me consume" , ruta:"exercicio1exame/IvanG.jpg"},
       {numero:23 ,nom:"Gvan", apell:"Iutierrez", frase:"Este finde no salgo que tengo que estudiar" , ruta:"exercicio1exame/IvanG.jpg"},
       {numero:24 ,nom:"Raniel", apell:"Dodriguez", frase:"Dark Souls es el peor juego de la historia", ruta:"exercicio1exame/DanielRodriguezTato.webp" },
       {numero:25 ,nom:"Mdrian", apell:"Aiguez", frase:"Eres muy chu chu chuli", ruta:"exercicio1exame/Adrian Miguez.jpg" },
       { numero:26 ,nom:"Oofia", apell:"Stero", frase:"Devoraste hasta el suelo, y aún así te ves divina", ruta:"exercicio1exame/sofia-otero.jpg" },

];

let alumno = document.getElementById("alumno");
let foto = document.getElementById("imaxe");
let frasse = document.getElementById("frase");

function amosar() {
    let numAleatorio = Math.floor(Math.random() *alumnos.length +1);
    console.log(numAleatorio);
        alumno.innerHTML = alumnos[numAleatorio].nom +" " + alumnos[numAleatorio].apell;
        frasse.innerHTML = alumnos[numAleatorio].frase;
        foto.src = alumnos[numAleatorio].ruta ;
    }


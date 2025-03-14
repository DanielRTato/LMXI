let miArray=[1,2,3,4,5,"dsad",6,7,true,[1,2,3],10];
console.log(miArray);
console.log(miArray[5]);

// for (let i = 0; i < miArray.length; i++) {
//     console.log(miArray[i])
//     miArray[i]="manzana"
// }
// console.log(miArray);

miArray.forEach((elemento)=>{console.log(elemento)});

miArray.push("pera"); //añade al final
miArray.pop(); //quita el ultimo
miArray.shift(); //quita el primero
miArray.unshift("naranja"); //añade al principio

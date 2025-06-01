let mijson = '{"nome": "Vello sabroso", "peso": 2000  }';

let miobjeto= JSON.parse(mijson);

console.log(mijson);
console.log(miobjeto);

let misjonotravez= JSON.stringify(miobjeto);
console.log(misjonotravez);

const numeros = [1,8,35,7,14];
let sum = 0;
let totalNumeros = numeros.length;
let promedio;

numeros.forEach(numero=>sum+=numero)

console.log(sum);

promedio=(sum/totalNumeros)

console.log(promedio);

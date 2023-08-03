//1 - Escreva de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i) 
}

//2 - Some os números de 1 a 100
let soma = 0;
for (let n = 1; n <= 100; n++) {
    soma = soma + n
}
console.log("A soma dos números de 1 a 100 é: " + soma);

//3 - Conte e imprima a quantidade de números pares de 1 a 100
let count = 0
let n = 1
while (n < 100) {
    count = count + 1
    n = n + 2
}
console.log("A quantidade de números pares é: " + count);

//4 - Multiplique um número por 2 até que o resultado seja maior que 1000
let mult = 100
console.log("Número inicial: "+ mult);
while (mult <= 1000) {
    mult = mult * 2
}
console.log("Número final: "+ mult);

//5 - Verifique se o número é primo
let numero = 7
let c = 0
for (let j = 2; j < numero; j++) {
    if (numero % j == 0) {
        c = c + 1;    
}}

if (c = 0) {
    console.log("É primo");
else {
    console.log("Não é primo")
}}

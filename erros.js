readline = require('readline-sync');

//1 - Divisão por zero
let numero = readline.question('Digite o número: ');
let divisor = readline.question('Digite o divisor: ');

try {
    if (divisor === 0) {
    throw 'Valor negado'
} catch {
    console.log("Divisão por zero");
    }
}

console.log(`O resultado do número ${numero} dividido pelo número ${divisor} é ${numero/divisor}`);
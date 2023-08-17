readline = require('readline-sync');

let numero = readline.question('Digite o número: ');
let divisor = readline.question('Digite o divisor: ');

if (divisor === 0) {
try {
    throw "Divisão por zero"
} catch (erro) {
    console.log("[Erro]");
    console.log("Divisão por zero");
    }
}

console.log(`O resultado do número ${numero} dividido pelo número ${divisor} é ${numero/divisor}`);
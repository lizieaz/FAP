//1 - Crie uma função saudação para exibir Olá, [nome]
// Valores padrões (nomeDoParamentro = 'Valor padrão')
function exibirSaudacao(nome, saudacao='Olá') {
    console.log(`${saudacao}, ${nome}`);
}
//exibirSaudacao('Anelise');

//2 - Função calculadora que receba 2 números e um operador como parâmetro e apresente o resultado
function calculadora(num1, num2, operacao='+') {
    switch (operacao) {
        case '+':
            console.log(`O resultado da operação é: ${num1 + num2}`);
            break;
        case '-':
            console.log(`O resultado da operação é: ${num1 - num2}`);
            break;
        case '*':
            console.log(`O resultado da operação é: ${num1 * num2}`);
            break;
        case '/':
            console.log(`O resultado da operação é: ${num1 / num2}`);
            break;
        default:
            break;
    }
}

//calculadora(3,2);

//3 - Função contagemRegressiva com número padrão de inicio
function contagemRegressiva(inicio=10) {
    while (inicio>0) {
        console.log(`Contagem Regressiva: ${inicio} `);
        inicio--
    }
}
//contagemRegressiva();

//4 - Função apresentação como nome, idade e profissão
// "Olá, eu sou [nome], tenho [idade] anos e sou [profissao]."

function apresentacao(nome='Anelise', idade='28', profissao='Engenheira Civil') {
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`)
}

//apresentacao()

//5 - mensagemPersonalizada com parametros mensagem e estilo. Com estilo padrão 'normal'.
function mensagemPersonalizada(mensagem, estilo='normal') {
    switch (estilo) {
        case 'normal':
            console.log(`mensagem: "${mensagem}"
formatação: normal`);
            break;
        case 'negrito':
            console.log(`mensagem: "${mensagem}"
formatação: negrito`);
            break;
        case 'italico':
            console.log(`mensagem: "${mensagem}"
formatação: itálico`);
            break;
        default:
            break;
    }
}

//mensagemPersonalizada('Bom dia');

//Função com retorno
function criarMensagemDeSaudacao(nome='Anelise') {
    const mensagem = `Hello, ${nome}`;
    return mensagem;
}

//let msg = criarMensagemDeSaudacao();
//console.log(msg);

//console.log(criarMensagemDeSaudacao());

//1 - Função somar com dois números e retorne a soma deles
function somar(num1,num2) {
    const soma = num1 + num2;
    return soma;
}

//let soma = somar(2,2);
//console.log(soma);

//console.log(somar(2,2));

//2 - Função ePar com um numero e retorne true ou false
function ePar (numero) {
    return (numero %2==0)
}

//console.log(ePar(52));

//3 - Função maiorNumero com três números e retorne o maior.
function maiorNumero(num1, num2, num3) {
    let maior = num1
    if (num2 > num1) {
        maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }
    return maior
}

//console.log(`O maior número é: ${maiorNumero(5, 2, 7)}`);

//4 - Função calcularIMC com peso e a altura e retorne o IMC
function calcularIMC(peso, altura) {
    const IMC = peso / (altura^2);
    return IMC
}

//let indice = calcularIMC(89,1.78);
//console.log(indice.toFixed(2));

//console.log(calcularIMC(89,1.78).toFixed(2));



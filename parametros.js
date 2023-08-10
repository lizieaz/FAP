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
contagemRegressiva(10);
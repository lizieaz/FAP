// 1 - Criar função para exibir 'Olá, mundo!' quando chamada
function saudacao() {
    console.log("Olá, mundo!");
}

//saudacao();

// 2 - Escreva função 'dobro' que aceite um parâmetro e imprima o dobro
function dobro(x) {
    console.log(`O dobro do número ${x} é: ${x*2}`);
}

//dobro(12);

// 3 - Criar função para receber dois números (início e fim) e escrever todos os inteiros no intervalo
function intervalo(x, y) {
    while (x<=y) {
        console.log(`Número: ${x}`)
        x = x + 1
    }
}

//intervalo(2, 20)

// 4 - Função que verifique se o número é par
function verificarPar(n) {
    if (n %2 == 0) {
        console.log(`O número ${n} é par`);
    } else {
        console.log(`O número ${n} não é par`);
    }
}

//verificarPar(163)

// 5 - Criar função 'imprimirLista' para aceitar um array e imprimir todos os parâmetros dele
function imprimirLista(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`nome: ${arr[i]}`);
    }
}

const lista = ['anelise', 'anielle', 'ivanise', 'suzi'];
imprimirLista(lista);
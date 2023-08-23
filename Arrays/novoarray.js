// const usuarios = [
//     {nome: "Robinson", idade: 18},
//     {nome: "William", idade: 28},
//     {nome: "Janaina", idade: 19},
//     {nome: "Carla", idade: 25},
//     {nome: "Maíra", idade: 32},
//     {nome: "George", idade: 30},
//     {nome: "Camila", idade: 27 },
//     ];

//for (let i = 0; i < usuarios.length; i++) {
//    console.log(usuarios[i].nome);
//    console.log(usuarios[i].idade);
//    console.log();
//}

//for (const i in usuarios) {
//    console.log(usuarios[i].nome);
//    console.log(usuarios[i].idade);
//}

//for (const elemento of usuarios) {
//    console.log(elemento.nome);
//    console.log(elemento.idade);
//}

//1 - array [3,7,2,9,5], crie um for e exiba:
// const numeros = [3,7,2,9,5];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
//     }

//2 - Suponha que você tenha um objeto com valores numéricos: {a: 10, b: 20,
//c: 30, d: 40}. Utilize um laço "for...in" para iterar pelas chaves do objeto e
//calcular a soma de todos os valores.

// const numeros = [
//         {item: "a", valor: 10},
//         {item: "b", valor: 20},
//         {item: "c", valor: 30},
//         {item: "d", valor: 40},
//         ];
// let soma = 0

// for (const i in numeros) {
//    console.log(numeros[i].item);
//    console.log(numeros[i].valor);
//    soma = soma + numeros[i].valor;
// }

// numeros = {a: 10, b: 20, c: 30, d: 40};
// let soma = 0

// for (i in numeros) {
//     soma += numeros[i];
// }
// console.log(numeros);
// console.log(soma);


//3- Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" que
// itere pelo array, verificando se cada número é par. Se for par, adicione-o a
// um novo array. No final, exiba o novo array com os números pares.

// const numeros = [12, 5, 8, 21, 16, 7];
// const arrpar = [];

// for (const i in numeros) {
//     if ((numeros, i) %2 == 0) {
//         arrpar.push(numeros[i]);
//     }
// }

// for (const item of numeros) {
//     if (item %2 == 0) {
//         arrpar.push(item)
//     }
// }

// for (let i = 0; i < numeros.length; i++) {
//         if (numeros[i] %2 == 0) {
//             arrpar.push(numeros[i]);
//     }}

// console.log(`Array com números pares: ${arrpar}`);

//4- Considere um objeto com informações de estudantes: const estudantes = { alice:
//18, bob: 20, carol: 19, david: 21 }; Utilize um loop "for...in" para verificar se há um
//estudante com a idade de 19 anos. Se sim, exiba "Nome do estudante: idade" no console.

// const estudantes = [
//     {nome: "Alice", idade: 18},
//     {nome: "Bob", idade: 28},
//     {nome: "Carol", idade: 19},
//     {nome: "David", idade: 25},
//     ];

// for (const i in estudantes) {
//     if (estudantes[i].idade === 19) {
//         console.log(`Nome do estudante: ${estudantes[i].nome}
//         idade: ${estudantes[i].idade}`)  
//     }
// }

// estudantes = {Alice: 18, Bob: 20, Carol: 19, David: 21};

// for (const i in estudantes) {
//     if (estudantes[i] === 19) {
//         console.log(estudantes[i]);
//     }
// }


//5- Imagine que você tem uma matriz bidimensional representando uma grade de pontos:
//const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ]; Utilize dois loops "for"
//aninhados para calcular a soma de todos os elementos da matriz e exibir o resultado.

// const pontos = [
//     [2,5,8],
//     [3,9,12],
//     [4,6,10]
// ];

// let soma = 0

// for (let i = 0; i < pontos.length; i++) {
//     for (let j = 0; j < pontos[i].length; j++) {
//     soma = soma + pontos[i][j];
//     }
// }

// console.log(`Soma: ${soma}`);

// const pessoa = [
//     ["Robinson", 32, "João"],
//     ["Maria", 41, "Pedro"],
//     ["Paula", 28, "Julia"],
//     ];
    
//     for (let i = 0; i < pessoa.length; i++) {
//       for (let j = 0; j < pessoa[i].length; j++) {
//         console.log(pessoa[i][j]);
//       }
//     console.log();
//     }

function buscar(array, buscado) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === buscado) {
            console.log(`O elemento igual a ${buscado} está na posição ${i} do array`)
        }
    }
    console.log("Elemento não encontrado")
}

const numeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

buscar(numeros, 30);
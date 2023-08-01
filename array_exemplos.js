//1 - Crie dois arrays com números de 1 a 5 e depois concatene-os 
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];
console.log("Array 1: "+ arr1);
console.log("Array 2: "+ arr2);
const array_concat = arr1.concat(arr2);
console.log("Array concatenado: "+ array_concat);

//2 - Crie um novo array apenas com os números pares a partir do array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array de números: "+ numeros);
const pares = numeros.filter(pares => (pares %2) == 0);
console.log("Array com números pares: "+ pares);

//3 - Ordene o array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5] em ordem crescente
const number = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Array original: "+ number);
const ordenado = number.sort();
console.log("Array ordenado: "+ ordenado);

//4 - Encontre o índice do elemento 'laranja'
const frutas = ['maça', 'banana', 'laranja', 'uva', 'manga'];
console.log("Frutas: "+ frutas);
console.log("O índice do elemento 'laranja' é: "+ frutas.indexOf("laranja"));

//5 - Crie uma função que receba um parâmetro e verifique se é um array, retornando true ou false

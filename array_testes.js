//1 - Dado o array (10, 20, 30, 40, 50), acesse o segundo elemento e armazene-o em uma variável.
const meuArray = [10, 20, 30, 40, 50];  
console.log("meuArray= "+ meuArray) 
let segundoelemento = meuArray[1];
console.log("O segundo elemento é "+ segundoelemento);

//2 - Calcula e exiba o tamanho do array
const frutas = ['maça', 'banana', 'laranja', 'uva', 'manga'];
console.log("frutas= "+ frutas);
console.log("O tamnhanho do array é: "+ frutas.length);

//3 - adicione "pêra" no array anterior
frutas.push('Pêra');
console.log(frutas);

//4 - Remova o primeiro elemento do array 'frutas'
frutas.splice(0,1)
console.log(frutas)

//5 - Verifique se [25] está no meuArray e exiba a mensagem se ele foi encontrado ou não
console.log("O array 'meuArray' inclui o número 25?")
console.log(meuArray.includes(25)); // true
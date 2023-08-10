// cartas do jogador
let carta1=7;
let carta2=11;
let jogador=carta1+carta2;
// cartas do banco
let banco1=6;
let banco2=3;  
let banco3=5;
let banco4=4;
let banco=banco1+banco2+banco3+banco4;

if (jogador>21 & banco<=21) {
    console.log("Banco ganhou");
} else if (banco>21 & jogador<=21){
    console.log("Jogador ganhou");
} else if (banco > 21 & jogador >21) {
    console.log("Não houve ganhador")
} else if (jogador>banco) {
    console.log("Jogador ganhou");
} else if (banco>jogador){
    console.log("banco ganhou");
} else {
    console.log("Empate")
}

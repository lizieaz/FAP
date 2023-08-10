let idade;
idade = Number(prompt("Digite sua idade"));
if (idade >= 16) {
  console.log('Não pode dirigir');
}
else if (idade >= 18) {
    console.log('Pode dirigir com autorização');
}
else {
    console.log('Pode dirigir com CNH');
}

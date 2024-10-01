// 26) Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e 
// quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade 
// média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual 
// a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar 
// compra'. 

let quantidadeAtual = parseFloat(prompt("Quantidade atual em estoque:"));
let quantidadeMaxima = parseFloat(prompt("Quantidade máxima em estoque:"));
let quantidadeMinima = parseFloat(prompt("Quantidade mínima em estoque:"));

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

alert("Quantidade média: " + quantidadeMedia);

if (quantidadeAtual >= quantidadeMedia) {
  alert("Não efetuar compra");
} else {
  alert("Efetuar compra");
}

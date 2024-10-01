// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
//     seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
//     que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.

let litros = parseFloat(prompt("Digite a quantidade de litros vendidos:"));
let tipoCombustivel = prompt(
  "Digite o tipo de combustível (A-Álcool, G-Gasolina):"
).toUpperCase();
let precoPorLitro;
let desconto;
let valorTotal;

if (tipoCombustivel === "A") {
  precoPorLitro = 2.9;
  if (litros <= 20) {
    desconto = 0.03; // 3% de desconto para até 20 litros
  } else {
    desconto = 0.05; // 5% de desconto para mais de 20 litros
  }
} else if (tipoCombustivel === "G") {
  precoPorLitro = 3.3;
  if (litros <= 20) {
    desconto = 0.04; // 4% de desconto para até 20 litros
  } else {
    desconto = 0.06; // 6% de desconto para mais de 20 litros
  }
} else {
  alert("Tipo de combustível inválido!");
}

if (precoPorLitro) {
  let valorDesconto = precoPorLitro * litros * desconto;
  valorTotal = precoPorLitro * litros - valorDesconto;
  alert("O valor a ser pago é: R$ " + valorTotal.toFixed(2));
}

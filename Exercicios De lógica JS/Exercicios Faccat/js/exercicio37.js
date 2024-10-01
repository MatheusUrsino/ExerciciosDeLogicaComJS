// 37) Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
// Até 5 Kg Acima de 5 Kg 
// Morango R$ 2,50 por Kg R$ 2,20 por Kg 
// Maçã R$ 1,80 por Kg R$ 1,50 por Kg 
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
// ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
// morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

let kgMorango = parseFloat(prompt("Digite a quantidade de morangos em Kg:"));
let kgMaca = parseFloat(prompt("Digite a quantidade de maçãs em Kg:"));
let precoMorango = kgMorango <= 5 ? 2.50 * kgMorango : 2.20 * kgMorango;
let precoMaca = kgMaca <= 5 ? 1.80 * kgMaca : 1.50 * kgMaca;
let total = precoMorango + precoMaca;

if (kgMorango + kgMaca > 8 || total > 25) {
    total *= 0.90;
}

alert(`Valor a ser pago: R$ ${total.toFixed(2)}`);

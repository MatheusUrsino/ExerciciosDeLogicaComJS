// 36) Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades 
//     dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma 
//     das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais 
//     novo com a mulher mais velha.

let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem:"));


let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));

let homemMaisVelho = Math.max(idadeHomem1, idadeHomem2); //Pega o maior valor
let homemMaisNovo = Math.min(idadeHomem1, idadeHomem2); // pega o menor valor

let mulherMaisVelha = Math.max(idadeMulher1, idadeMulher2); //pega o maior valor 
let mulherMaisNova = Math.min(idadeMulher1, idadeMulher2); //pega o menor valor

let soma = homemMaisVelho + mulherMaisNova;
let produto = homemMaisNovo * mulherMaisVelha;


alert("Soma das idades do homem mais velho com a mulher mais nova: " + soma);
alert("Produto das idades do homem mais novo com a mulher mais velha: " + produto);

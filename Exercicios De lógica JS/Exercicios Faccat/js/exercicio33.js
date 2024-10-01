// 33) Ler dois valores e imprimir uma das três mensagens a seguir: 
// ‘Números iguais’, caso os números sejam iguais 
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
// ‘Segundo maior’, caso o segundo seja maior que o primeiro. 

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

if (num1 === num2) {
    alert("Números iguais");
} else if (num1 > num2) {
    alert("Primeiro é maior");
} else {
    alert("Segundo maior");
}

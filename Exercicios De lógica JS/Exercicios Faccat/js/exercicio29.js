// 29) Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
// maiores

let a = parseFloat(prompt("Digite o primeiro valor:"));
let b = parseFloat(prompt("Digite o segundo valor:"));
let c = parseFloat(prompt("Digite o terceiro valor:"));

let soma = a + b + c - Math.min(a, b, c);

alert("A soma dos dois maiores valores é: " + soma);
// 28) Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 

let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let maior = valor1;

if (valor2 > maior) {
  maior = valor2;
}

if (valor3 > maior) {
  maior = valor3;
}

alert("O maior valor é: " + maior);

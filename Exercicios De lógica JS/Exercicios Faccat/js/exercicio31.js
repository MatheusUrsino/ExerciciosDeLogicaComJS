// Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
// ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
// dos outros 2 lados.

let A = parseFloat(prompt("Digite o valor do lado A:"));
let B = parseFloat(prompt("Digite o valor do lado B:"));
let C = parseFloat(prompt("Digite o valor do lado C:"));


//estou verificando se a soma dos outros dois angulos são maiores  que o terceiro para formar um triangulo
if (A < B + C && B < A + C && C < A + B) {
    alert("Os valores formam um triângulo.");
} else {
    alert("Os valores não formam um triângulo.");
}
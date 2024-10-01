// 3) Seja o seguinte algoritmo:
// inicio
// ler a, b, c
// se (a < b+c) e (b <a+c) e (c <a+b) então
// se (a=b) e (b=c) então
// mens  'Triângulo Equilátero'
// senão
// se (a=b) ou (b=c) ou (a=c) então
// mens  'Triângulo Isósceles'
// senão
// mens  'Triângulo Escaleno'
//  fim_se
//  fim_se
// senão
// mens  'Não e possível formar um triângulo'
// fim_se
// escrever mens
// fim

let a = parseFloat(prompt("Digite o valor do lado a:"));
let b = parseFloat(prompt("Digite o valor do lado b:"));
let c = parseFloat(prompt("Digite o valor do lado c:"));
let mensagem = "";

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        mensagem = 'Triângulo Equilátero';
    } else if (a === b || b === c || a === c) {
        mensagem = 'Triângulo Isósceles';
    } else {
        mensagem = 'Triângulo Escaleno';
    }
} else {
    mensagem = 'Não é possível formar um triângulo';
}

alert(mensagem);


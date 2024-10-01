// 41) Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos 
// exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo 
// e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: 
//  N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
// Média_de_Aproveitamento = ---------------------------------------------------------
// 7

let n1 = parseFloat(prompt("Digite a nota da primeira verificação (N1):"));
let n2 = parseFloat(prompt("Digite a nota da segunda verificação (N2):"));
let n3 = parseFloat(prompt("Digite a nota da terceira verificação (N3):"));
let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

let mediaAproveitamento = (n1 + n2 * 2 + n3 * 3 + mediaExercicios) / 7;
let conceito;

if (mediaAproveitamento >= 9) {
    conceito = "A";
} else if (mediaAproveitamento >= 7.5) {
    conceito = "B";
} else if (mediaAproveitamento >= 6) {
    conceito = "C";
} else if (mediaAproveitamento >= 4) {
    conceito = "D";
} else {
    conceito = "E";
}

alert(`Média de Aproveitamento: ${mediaAproveitamento.toFixed(2)}\nConceito: ${conceito}`);

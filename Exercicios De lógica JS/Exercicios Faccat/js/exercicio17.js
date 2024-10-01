// Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
// uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
// // aluno é aprovado). Escrever também a média calculada.

let primeiraNota = parseFloat(prompt("Insira a primeira nota")),
  segundaNota = parseFloat(prompt("Insira a segunda nota"));

let somatoria = primeiraNota + segundaNota;
let media = somatoria / 2;
if (media >= 6) {
  console.log(`Aluno aprovado, sua média foi: ${media}`);
} else {
  console.log(`Aluno aprovado, sua média foi: ${media}`);
}

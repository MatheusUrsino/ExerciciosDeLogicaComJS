// 42) Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para 
// estar em condições, um dos seguintes requisitos deve ser satisfeito: 
//  - Ter no mínimo 65 anos de idade. 
//  - Ter trabalhado no mínimo 30 anos. 
//  - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos. 
// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano 
// de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo 
// de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.

let codigo = parseInt(prompt("Digite o número do empregado (código):"));
let anoNascimento = parseInt(prompt("Digite o ano de nascimento do empregado:"));
let anoIngresso = parseInt(prompt("Digite o ano de ingresso na empresa:"));

let idade = 2024 - anoNascimento;
let tempoTrabalho = 2024 - anoIngresso;

if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
    alert("Pode aposentar");
} else {
    alert("Não pode aposentar");
}

alert(`Código: ${codigo}\nIdade: ${idade} anos\nTempo de Trabalho: ${tempoTrabalho} anos`);

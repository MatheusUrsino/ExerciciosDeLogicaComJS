// Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
// poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

let anoNasc = parseInt(prompt("Em que ano você nasceu?")),
  anoAtual = parseInt(prompt("Em que ano estamos?"));
let idade = anoAtual - anoNasc;

if (idade > 18) {
  alert("Você tem idade para votar");
} else if (idade >= 16 && idade < 18) {
  alert("Você pode votar, mas é opicional");
} else alert("Você não tem idade para votar");

// inicio
// ler nome
// ler sexo
// se sexo = M então
// peso_ideal  (72.7 * altura) - 58
// senão
// peso_ideal  (62.1 * altura) – 44.7
//  fim_se
// escrever peso_ideal
// fim

let nome = prompt("Digite seu nome");
let sex = prompt("Digite Seu Sexo, sendo que: M - Masculino || F - feminino");
let altura = parseFloat(prompt("Digite sua altura em metros"));
let peso_ideal = 0;

if (sex == "M" || sex == "m") {
  peso_ideal = 72.7 * altura - 58;
} else if (sex == "F" || sex == "f") {
  peso_ideal = 62.1 * altura - 44.7;
} else alert("Sexo invalido");

alert( nome + ", Seu peso ideal é: " + peso_ideal)

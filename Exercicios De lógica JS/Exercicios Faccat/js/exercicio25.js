let conta = prompt("Número da conta:");
let saldo = parseFloat(prompt("Saldo:"));
let debito = parseFloat(prompt("Débito:"));
let credito = parseFloat(prompt("Crédito:"));

let saldoAtual = saldo - debito + credito;

alert("Saldo atual: " + saldoAtual);

if (saldoAtual >= 0) {
  alert("Saldo Positivo");
} else {
  alert("Saldo Negativo");
}

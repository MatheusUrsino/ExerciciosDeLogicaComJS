// 32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
// do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE

let time1 = prompt("Digite o nome do primeiro time:");
let golsTime1 = parseInt(prompt("Digite o número de gols do " + time1 + ":"));

let time2 = prompt("Digite o nome do segundo time:");
let golsTime2 = parseInt(prompt("Digite o número de gols do " + time2 + ":"));

if (golsTime1 > golsTime2) {
    alert(`O vencedor é: ${time1}  ${golsTime1} X ${golsTime2} ${time2}`);
} else if (golsTime2 > golsTime1) {
    alert(`O vencedor é: ${time2}  ${golsTime2} X ${golsTime1} ${time1}`);
} else {
    alert("EMPATE");
}

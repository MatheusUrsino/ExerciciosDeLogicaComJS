// Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
//     minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
//     de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

function calcularDuracao(horaInicio, horaFim) {
  let duracao;

  if (horaFim > horaInicio) {
    duracao = horaFim - horaInicio;
  } else {
    duracao = 24 - horaInicio + horaFim;
  }

  return duracao;
}

const horaInicio = parseInt(prompt("Digite a hora de início do jogo: "));
const horaFim = parseInt(prompt("Digite a hora de fim do jogo: "));

const duracao = calcularDuracao(horaInicio, horaFim);
alert("A duração do jogo foi de: " + duracao + " horas");

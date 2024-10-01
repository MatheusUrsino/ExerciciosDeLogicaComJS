


let horasTrabalhadas = parseFloat(prompt("Digite as horas trabalhadas: "));

let salarioPorHora = parseFloat(prompt("Digite o valor pago por hora: "));

let salarioMensal = salarioPorHora * horasTrabalhadas;
let salarioFinal;

if (horasTrabalhadas > 40) {
    let horaExtra = horasTrabalhadas - 40;
    let ganhosHoraExtra = (salarioPorHora / 2) * horaExtra;
    salarioFinal = salarioMensal + ganhosHoraExtra;
    alert(`O salário final será de: R$ ${salarioFinal
    }`);
} else {
    salarioFinal = salarioMensal;
    alert(`O salário final será de: R$ ${salarioMensal}`);
}
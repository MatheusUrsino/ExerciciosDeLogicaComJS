// 24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
// ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que 
// ultrapassar este valor, calcular e escrever o seu salário total. 

let salarioFixo = parseFloat(prompt("Insira seu salário fixo"))
let vendasEfetuadas = parseFloat(prompt("Insira o valor de todas suas vendas efetuadas no mês"))
let comissao = 0.0
let salarioFinal = 0.0
if(vendasEfetuadas  <= 1500){
comissao = vendasEfetuadas * 0.03
}
else
{
    comissao = ((1500 * 0.03) + (vendasEfetuadas - 1500)* 0.05)
}

salarioFinal = salarioFixo + vendasEfetuadas + comissao

alert("Seu salário final será de: " + salarioFinal)

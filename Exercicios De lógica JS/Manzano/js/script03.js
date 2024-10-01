let numero01 = parseInt(prompt("Digite um numero: "))
let numero02 = parseInt(prompt("Digite um numero: "))

if(numero01 > numero02)
{
    let diferenca = numero01 - numero02
    alert(`A diferença entre ${numero01} e ${numero02} é: ${diferenca}` )
}
else
{
    let diferenca = numero02 - numero01
    alert(`A diferença entre ${numero01} e ${numero02} é: ${diferenca}` )
}
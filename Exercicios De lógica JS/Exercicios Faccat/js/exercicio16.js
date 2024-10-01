// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
// compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
// escreva o custo total da compra

let apple = prompt("Quantas maçãs foram compradas?")

console.log("maça custa R$1.30, mas se comprar pelo menos 12, sai por R$1.")

if (apple >= 12)
{
    console.log(`O custo total da compra é R$${apple * 1}.00`)
}
else
{
    console.log(`O custo total da compra é R$${apple * 1.30}`)
}
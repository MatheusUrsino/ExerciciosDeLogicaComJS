// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.

let valor1 = prompt("Insira um valor"), valor2 = prompt("Insira outro valor")

if(valor1 > valor2)
    console.log(`${valor1} é maior que ${valor2}`)
else if(valor1 == valor2)
    console.log("Os valores são iguais")
else
console.log(`${valor2} é maior que ${valor1}`)
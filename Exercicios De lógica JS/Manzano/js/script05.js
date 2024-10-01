let contadora = 0
let numeros = ""

while (contadora < 100)
{
    numeros += contadora + "<br>"
    document.getElementById('numero').innerHTML = numeros
    contadora++
}
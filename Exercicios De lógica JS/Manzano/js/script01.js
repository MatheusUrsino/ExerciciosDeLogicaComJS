let tempFahrenheit = parseFloat(prompt("Digite a temperatura em graus Celsius: "));
let tempCelsius = (tempFahrenheit -32 ) * (5 / 9);


alert("A temperatura em graus Celsius é: " + tempCelsius +"°C");

if(tempCelsius < 100)
{
    alert("Ainda não está em ponto de ebulição")
}
else{
    alert("A temperatura já está em ponto de ebulição")
}
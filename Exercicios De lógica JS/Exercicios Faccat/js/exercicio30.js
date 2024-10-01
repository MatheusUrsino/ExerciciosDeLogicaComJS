// 30) Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
// crescente


let a = parseFloat(prompt("Digite o primeiro valor:"));
let b = parseFloat(prompt("Digite o segundo valor:"));
let c = parseFloat(prompt("Digite o terceiro valor:"));

let valores = [a , b , c]; //criei uma lista para adicionar os valores inseridos e verifica-los
valores.sort((x, y) => x - y);  //utilizei o método Sort para ordenar os valores inseridos e adicionei os parametros dentro do parenteses para definir qual ordem deveria seguir (Crescente)


alert("Os valores em ordem crescente são: " + valores);
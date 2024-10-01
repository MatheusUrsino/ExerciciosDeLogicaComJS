const pessoa={pNome:"Matheus", Sobrenome: "Ursino", ultimoNome:"Dos Santos", idade:17}
let dados = ""
for (const x in pessoa) {
    dados += pessoa[x] + " "

}
console.log(dados)
//Crie um objeto chamado pessoa com as propriedades: nome (string), idade (number) e cidade (string).
//  Em seguida, exiba no console o nome e a cidade no formato (exemplo): "Ana, 20 anos - São Paulo".


function propriedade(nome,idade,cidade){
    this.nome=nome
    this.idade=idade
    this.cidade=cidade

    this.exibirInfo = function(){
        console.log("Nome: ", nome)
        console.log("Idade: ", idade)
        console.log("Cidade: ", cidade)
    }
}

let propriedadeA = new propriedade ("Vinicius", 15, "Cotia")
let propriedadeB= new propriedade ("Candido", 15, "Cotia")
let propriedadeC = new propriedade ("Chaves", 15, "Cotia")

propriedadeA.exibirInfo()
propriedadeB.exibirInfo()
propriedadeC.exibirInfo()

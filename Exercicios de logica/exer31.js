//Escreva um programa que crie um objeto para armazenar dados de um pet: nome, 
// espécie, tutor, idade. Escreva uma função que receba o objeto pet como 
// parâmetro e exiba seus dados no console de maneira formatada.


function pet(nome,idade,especie,tutor){
    this.nome=nome
    this.idade=idade
    this.especie=especie
    this.tutor=tutor

    this.exibirInfo = function(){
        console.log("Nome: ", nome)
        console.log("Idade: ", idade)
        console.log("especie: ", especie)
        console.log("Tutor: ", tutor)
        console.log("------------------")
    }
}

let petA = new pet ("Bob", 14, "Vira-lata", "Vinicius")
let petB= new pet ("Maya", 6, "Vira-lata", "Vinicius")
let petC = new pet ("Babaloo", 7, "Ilhaza", "Vinicius")

petA.exibirInfo()
petB.exibirInfo()
petC.exibirInfo()
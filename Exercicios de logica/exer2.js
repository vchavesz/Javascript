//Escreva um algoritmo que receba nome e idade de duas pessoas.
//  Exiba uma mensagem dizendo quem é o mais velho./*

let nome1
let nome2
let idade1
let idade2


nome1 = prompt("Insira o nome 1: ")
idade1 = prompt("Insira a idade: " + nome1)
nome2 = prompt("Insira o nome 2: ")
idade2 = prompt("Insira a idade: " + nome2)

if(idade1 > idade2){
    alert(nome1 + " é mais velho que " + nome2)
}else {
    alert(nome2 + " é mais velho que " + nome1)
}
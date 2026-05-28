/*
Pratica:

Escrever um programa que solicita duas notas 
ao uduario ( via promt) e calcula a media das notas.

Considerando que a media para a aprovação é 7,
exiba se o aluno foi aprovado ou reprovado
*/

let nota1 
let nota2 
let media

nota1 = prompt("Insira a nota 1 (0 a 10): ")
nota2 = prompt("Insira a nota 2 (0 a 10): ")

// Converte de string para numero
nota1 = Number (nota1)
nota2 = Number (nota2)

media = (nota1 + nota2) / 2

console.log("A média das notas é: " + media )

if (media  >= 7){
    console.log("Media aceita de aprovação")
} else{
    console.log("Media negada de aprovação")
}


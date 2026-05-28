//*Escreva um algoritmo que solicite a cidade de nascimento
//  e a cidade de residência de uma pessoa. 
// Faça a verificação e exiba se a cidade de nascimento e
//  de residência da pessoa são iguais ou diferentes.*/

let CidadeQnasceu
let CidadeQreside

CidadeQnasceu = prompt("Insira a cidade que você nasceu: ")
CidadeQreside = prompt("Insira a cidade em que você mora: ") 

if ( CidadeQnasceu == CidadeQreside){
    alert("Você mora na mesma cidade em que nasceu.")
}else {
    alert("Você não mora na mesma cidade em que nasceu.")
}
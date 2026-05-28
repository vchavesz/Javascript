//*Escreva um algoritmo que recebe o comprimento e largura de um cômodo,
//  para calcular a sua área em metros quadrados 
// (sabendo que área é obtida por comprimento x largura).*/

let comprimento 
let altura
let area

alert("Vamos calcular a area de um comodo!!! ")

comprimento = prompt("Insira o comprimento: ")
altura = prompt("Insira a altura: ")

comprimento = Number (comprimento)
altura = Number (altura)

area = comprimento * altura

alert("Sua area obtida é de: " + area)

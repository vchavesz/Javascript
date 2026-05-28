//* Escreva um algoritmo que recebe do usuário quantos gatos 
// e quantos cachorros a pessoa possui. Exiba uma mensagem
//  dizendo quantos gatos e quantos cachorros a pessoa tem, 
// e se ela tem mais gatos ou cachorros. */

let gatos
let cachorros
let total

gatos = prompt("Quantos gatos você possui? ")
cachorros = prompt ("Quantos cachorros você tem? ")

total = Number(gatos) + Number(cachorros)

alert("Você possui ao todo ( " + total + " ) de pets")

if(gatos > cachorros){
    alert("Você tem mais gatos")
}else if (gatos < cachorros){
    alert("Você tem mais cachorros")
}else {
    alert("A pessoa tem a mesma quantidade de gatos e cachorros")
}




// Escreva um programa em que o usuário insira o peso de 
// 6 pessoas e calcule a média aritmética do peso delas;
//  (total dos pesos / 6)


let soma = 0

for (let cont = 1; cont <= 6; cont++) {
    let peso = Number(prompt("Insira o peso da pessoa " + cont))
    soma = peso
}

let media = soma / 6
console.log("A média dos pesos é " + media)
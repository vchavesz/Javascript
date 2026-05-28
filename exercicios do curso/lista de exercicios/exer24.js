// Escreva um programa em que o usuário forneça 4 números, exiba
//  a contagem de quantos números inseridos são maiores do que 50;

let maiores = 0

for (let cont = 1; cont <= 4; cont++) {
    let numero = Number(prompt("Insira o numero " + cont))
    
    if (numero > 50) {
        maiores++
    }
}

console.log("Quantidade de números maiores que 50: " + maiores)
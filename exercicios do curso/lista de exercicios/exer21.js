/*
Escreva um programa que solicite 3 números ao usuário e exiba ao final qual foi o maior número inserido;
*/

do {
    let numeros1 = Number(prompt("Insira numero 1"))
    let numeros2 = Number(prompt("Insira numero 2"))
    let numeros3 = Number(prompt("Insira numero 3"))

    if (numeros1 > numeros2 && numeros1 > numeros3) {
        alert("Numero 1 foi o maior inserido")
    } else if (numeros2 > numeros1 && numeros2 > numeros3) {
        alert("Numero 2 foi o maior inserido")
    } else if (numeros3 > numeros1 && numeros3 > numeros2) {
        alert("Numero 3 foi o maior inserido") 
    }
} while (confirm("Deseja inserir novos números?"))
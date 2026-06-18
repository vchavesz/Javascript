/* 1- Declarar um array com 10 notas de 0.0 a 10.0
   2- Percorrer o array (for of) e exibir no console se 
      a nota é suficiente para aprovação (7.0 ou mais),
      recuperação (entre 5.0 e 6.9) ou reprovação (menor que 5.0)
   3- Calcular a média de notas da turma:
      - Percorrer o array (for of) e armazenar a soma das notas 
        em uma variável
      - Dividir a soma das notas pelo número de elementos do array
*/

let notas = []

notas[0] = 7.0
notas[1] = 5.5
notas[2] = 6.4
notas[3] = 4.2
notas[4] = 9.1
notas[5] = 3.3
notas[6] = 10.0
notas[7] = 9.6
notas[8] = 8.8
notas[9] = 2.3

for (let nota of notas){
    if (nota >= 7){
        console.log(nota, "Aprovado")
    }else if (nota >= 5.0){
        console.log(nota, "Recuperação")
    }else {
        console.log(nota, "Reprovado")
    }
}
let soma = 0

for(let nota of notas){
    soma = soma + nota
}

let media = soma / notas.length

console;log("A media de notas é ", media)
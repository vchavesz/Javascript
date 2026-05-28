/*Escreva um algoritmo que receba 2 (duas) notas, de 0.0 a 10.0.
// calcule a média aritmética das notas e verifique e exiba a 
// informação se o aluno está: Aprovado (média maior ou igual à 6.0)
//  Recuperação (média maior ou igual à 4.0 e menor que 6.0)
// Reprovado (média menor do que 4.0)
*/

let nota1
let nota2
let media

alert("Vamos calcular a sua media e seu estado de aprovação")
nota1=Number(prompt("Insira nota de 0.0 a 10.0"))
nota2=Number(prompt("Insira nota de 0.0 a 10.0"))



media = (nota1 + nota2) / 2


if(media >= 6){
    alert("Você esta aprovado com a nota " + media )
} else if (media >= 4) {
    alert("Você esta na recuperção com a nota " + media )
} else{
    alert("Você esta reprovado com a nota " + media )
}




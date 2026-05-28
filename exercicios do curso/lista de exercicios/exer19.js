/*

Defina uma variável com uma "senha". Faça um laço de repetição que 
solicite a senha (com prompt) até que o usuário insira a senha correta;

*/

let senha = 1234
let senhausuario

do {
    senhausuario = Number(prompt("Insira a senha de 4 digitos"))

    if ( senha == senhausuario){
        alert("Acesso concedido")

    }else { 
        alert("Acesso negado tente novamente")
    }

}while (senha != senhausuario)
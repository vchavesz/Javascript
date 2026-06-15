/*
Escreva um programa que declara um nome de usario e uma senha.
Solicite ao usuario um nome de usario e uma senha, e compare 
com os valores atribuidos as variaveis anteriormente

se nome de usario e senha forem identicos aos definidos
no programa, e exiba uma mensagem de acesso permitido, senão,
exiba uma mensagem de acesaso negado
*/

alert("Vamos fazer login de uma conta")

let usuario = "Pedro"
let senha = 1234

let usuarioInserido = prompt("Escreva o nome de usuario: ")
let senhaInserida = prompt("Escreva a senha: ")

if ( usuario == usuarioInserido && senha == senhaInserida){
    alert("Acesso concedido")
}else{
    alert("Acesso negado")
}
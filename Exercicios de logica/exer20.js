/*escreva um programa que solicite 1 ou 0. Caso o usuário insira um número diferente,
 o programa deverá solicitar novamente uma nova entrada do usuário;
*/




do {
    numeros = Number(prompt("Insira 1 ou 0"))

    if ( numeros == 1 || numeros == 0 ){
        alert("Acesso concedido por numeros iguais ")

    }else { 
        alert("Acesso negado insira numero 1 ou 0")
    }

}while (numeros != 1 && numeros != 0)
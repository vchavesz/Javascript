/* Escreva um algoritmo que solicite ao usuário a sigla de um 
estado da região sudeste e exiba o nome do estado por extenso,
caso a sigla seja de algum dos estados,
e uma mensagem indicando que não existe estado com a sigla fornecida,
caso não exista. */


let siglaSudeste

siglaSudeste = prompt("Insira uma sigla de algum estado do sudeste brasileiro exemplo (sp): ")

if (siglaSudeste == "sp"){
    alert("Voce digitou a sigla de São Paulo")
}
else if (siglaSudeste == "mg"){
    alert("Voce digitou sigla de Minas Gerais")
}
else if (siglaSudeste == "es"){
    alert("Voce digitou sigla do Espirito Santo")
}
else if (siglaSudeste == "rj"){
    alert("Voce digitou a sigla do Rio de Janeiro")
}else {
    alert("Não existe estado com essa sigla")
}





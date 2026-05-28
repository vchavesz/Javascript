let nome = "Bonifacio"
let sobrenome = "Mendes"
let idade = 25  
let eCasado = true 

// TYPEOF  e para exibir que tipo de variavel é 
console.log("O nome armazenado é: " + nome + " " + sobrenome)
console.log("Tipo de variavel nome:" + typeof nome ) 
console.log("Tipo de variavel idade:" + typeof idade ) 
console.log("Tipo de variavel eCasado:" + typeof eCasado)

// operadores de comparação 

// ele é de maior ?
if (idade > 17 ){ 
console.log("E maior de idade")
} else {
    console.log("E menor de 18 anos")
}

// qual e o estado civil dele?
if ( eCasado == true ){
    console.log("Ele e casado")
} else{
    console.log("Ele não é casado")
}

//  Seu sobrenome e silva?

if ( sobrenome == "Silva"){
    console.log("Sim, seu sobrenome é silva")
}else {
    console.log("Seu sobrenome não é Silva, ele é " + sobrenome)
}

 if ( nome != "Alcides"){
    console.log("Sim, o nome não é Alcides, o nome é " + nome )
 }

 if( !( idade == 15) ){
    console.log("Sim, idade não é igual a 15")
 }



/**
 OPERADORES DE COMPARAÇÃO 
 >   MAIOR
 <   MENOR
 >=  MAIOR OU IGUAL
 <=  MENOR OU IGUAL
 ==  IGUAL
 !=  DIFERENTE 
 !   NEGAÇÃO
 */
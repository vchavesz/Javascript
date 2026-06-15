/*  
Solicite ao usuario se ele e estudante
 ou professor caso ele seja qualquer
 um dos dois diga que ele esta apto a e meia-entrada
*/

let estudante = prompt("Você é estudante? [Sim] [Não]")
let professor = prompt("Você é professor(a)? [Sim] [Não]")
let aposentado = prompt("Você é aposentado(a)? [Sim] [Não]")

if (estudante == "Sim" || professor == "Sim" || aposentado == "Sim"){
    alert("Otimo! você esta elegivel a meia entrada!")
}else{
    alert("Infelizmente você não tem direito a meia entrada")
}
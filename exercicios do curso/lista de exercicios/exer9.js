/*
Josué foi a padaria tomar cafe da manhã caso tenha pão na chapa, ele quer café com leite de bebida.
Senão, ele quer coxinha ou risole, e qualquer bebida.
Se não houver as opções, ele não quer nada.

Estrutura um programa declarando variaveis booleanas
para os itens do cardapio, inidicando quais itens constam no cardapio;

Diga se Josué ira tomar café na padaria ou não.
*/

let paoNaChapa = false
let coxinha    = false 
let risole     = true

let bebida     = "Coca-Cola"

if ((paoNaChapa == true && bebida == "Café com leite") || (coxinha == true || risole == true)){
    alert("Josué ira tomar café na padaria!")
}else {
    alert("Josué não ira tomar café na padaria.")
}


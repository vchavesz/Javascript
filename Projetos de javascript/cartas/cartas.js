function criarCarta(){
    let inputNome = document.getElementById("nome-da-carta");
    let inputImagem = document.getElementById("imagem-da-carta");
    let inputCopa = document.getElementById("quantas-copas")
    let inputJogador = document.getElementById("melhor-jogador")

    let carta = document.createElement("div")

    carta.innerHTML="<p>"+ inputNome.value + "</p>"
    carta.innerHTML += '<img src="' + inputImagem.value + '"/>'
    carta.innerHTML+="<p>"+ inputCopa.value + "</p>"
    carta.innerHTML+="<p>"+ inputJogador.value + "</p>"

    let body = document.querySelector("body")
    body.appendChild(carta)

}
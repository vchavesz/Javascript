function criarCarta(){
    let inputNome = document.getElementById("nome-da-carta");
    let inputImagem = document.getElementById("imagem-da-carta");

    let carta = document.createElement("div")

    carta.innerHTML="<p>"+ inputNome.value + "</p>"
    carta.innerHTML += '<img src="' + inputImagem.value + '"/>'

    let body = document.querySelector("body")
    body.appendChild(carta)

}
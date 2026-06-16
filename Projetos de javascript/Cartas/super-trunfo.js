
  // 1. Pegar referências aos inputs
  let inputNome   = document.getElementById("nome-da-carta");
  let inputImagem = document.getElementById("imagem-da-carta");

  // Atributos da carta
  let inputCopas    = document.querySelector("#atributo-copas");
  let inputRanking  = document.querySelector("#atributo-ranking");
  let inputVitorias = document.querySelector("#atributo-vitorias");

  // 2. Criar elemento HTML da carta
  function criarCarta() {
    if(inputNome.value    != ''    && 
      inputImagem.value   != ''    && 
      inputCopas.value    != ''    && 
      inputRanking.value  != ''    && 
      inputVitorias.value != ''    ){
  let carta = document.createElement("div");

  // Adiciona nome e imagem da carta
  carta.innerHTML = '<h3>' + inputNome.value + '</h3>';
  carta.innerHTML += '<img src="' + inputImagem.value + '" />';

  // Adiciona atributos da carta em uma <ul>
  carta.innerHTML += '<ul>';
  carta.innerHTML += '<li>Copas: ' + inputCopas.value + '</li>';
  carta.innerHTML += '<li>Ranking Fifa: ' + inputRanking.value + '</li>';
  carta.innerHTML += '<li>Vitórias em Copas: ' + inputVitorias.value + '</li>';
  carta.innerHTML += '</ul>';

  // 3. Adicionar carta no documento HTML
  let section = document.querySelector("#cartas");
  section.appendChild(carta) // Adiciona elemento filho ao body, no caso, carta

  limparInputs();
  }
}

function limparInputs(){
  inputNome.value     = '';
  inputImagem.value   = '';
  inputCopas.value    = '';
  inputRanking.value  = '';
  inputVitorias.value = '';

}

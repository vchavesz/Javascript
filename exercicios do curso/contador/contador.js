const paragrafo = document.getElementById('contador')
let contador = Number (paragrafo.innerText)

function aumentar(){
    contador = contador++
    paragrafo.innerText = contador
}

function diminuir(){
    contador = contador--
    paragrafo.innerText = contador
}

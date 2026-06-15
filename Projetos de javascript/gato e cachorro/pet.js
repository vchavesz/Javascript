
const foto = document.querySelector('#imagem-pet')
const body = document.querySelector('body')

function mostrarGato() {
  foto.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Domestic_Cat_Face_Shot.jpg/960px-Domestic_Cat_Face_Shot.jpg')
}

function mostrarCachorro() {
  foto.setAttribute('src', 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400')
}

function mudarBackground() {
  // body.style.backgroundColor = '#000000'
  body.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Digital_graphic_pattern_61.png/960px-Digital_graphic_pattern_61.png")'

  body.style.fontFamily = 'Times New Roman'
  body.style.fontSize   = '52px'
}

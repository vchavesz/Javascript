let equipados = ['🦴','🔨','🔦','🔎'];
let mochila   = ['📚', '✏️', '📓', '🎧', '💧', '🍎', '🔑', '💊', '📱'];

// Percorrendo o array de equipados para adicioná-los nos slots
for (let [indice, item] of equipados.entries() ) {
  let p = document.createElement('p');
  let slot = document.querySelector('#slot-' + indice);

  p.innerHTML = item
  slot.appendChild(p);
}

for (let[indice, valor] of mochila.entries()){
  let p = document.createElement('p');
  let slot = document.querySelector('#mochila-slot-' + indice);

  p.innerHTML = valor
  slot.appendChild(p);
}
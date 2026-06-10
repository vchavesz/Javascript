function adicionarTarefa(){
// criar elemento da tarefa <article>

let tarefa = document.createElement('article')

// definir o conteudo do elemento da tarefa 

tarefa.innerHTML = '<p>Lavar o carro</p>'

//enserir a tarefa na pagina 

const body = document.querySelector('body')
body.appendChild(tarefa)

}
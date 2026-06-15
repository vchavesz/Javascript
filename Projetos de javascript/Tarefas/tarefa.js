function adicionarTarefa(){
// pegar conteudo da textarea
//primeiros armazenamos a referencia <textarea>
const textarea = document.getElementById('nova-nota')
//depois pegamos o seu conteudo 
let conteudo = textarea.value 


// criar elemento da tarefa <article>

let tarefa = document.createElement('article')

// definir o conteudo do elemento da tarefa 

tarefa.innerHTML = '<p>'+ conteudo +'</p>'

//enserir a tarefa na pagina 

const body = document.querySelector('body')
body.appendChild(tarefa)

// apagar conteudo <textarea>

textarea.value = ""

}
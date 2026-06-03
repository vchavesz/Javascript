//Utilize o programa anterior como base, mas agora atribua uma função (método) à uma 
// propriedade do objeto para emitir som, que irá exibir “Au au!” caso espécie seja 
// igual à Cachorro, e “Miau!” caso espécie seja igual à Gato. Obs: nesse caso não é 
// necessário parâmetros, pode ser utilizado o this.


function Pet(nome, idade, especie, tutor) {
    this.nome = nome
    this.idade = idade
    this.especie = especie
    this.tutor = tutor

    this.emitirSom = function() {
        if (this.especie == "Cachorro") {
            console.log("Au au!")
        } else if (this.especie == "Gato") {
            console.log("Miau!")
        } 
    }

    this.exibirInfo = function() {
        console.log("Nome:", this.nome)
        console.log("Idade:", this.idade)
        console.log("Espécie:", this.especie)
        console.log("Tutor:", this.tutor)
        this.emitirSom()
        console.log("------------------")
    }
}

let petA = new Pet("Bob", 14, "Cachorro", "Vinicius")
let petB = new Pet("Maya", 6, "Cachorro", "Vinicius")
let petC = new Pet("Babaloo", 7, "Gato", "Vinicius")

petA.exibirInfo()
petB.exibirInfo()
petC.exibirInfo()
function Funcionario(Parametronome, Parametrosetor, Parametrocargo,ParametroSalario) {
    this.nome = Parametronome
    this.setor = Parametrosetor
    this.cargo = Parametrocargo
    this.salario = ParametroSalario
    this.empresa = "Senai"

    this.exibieInfos = function() {
        console.log("Nome: ", this.nome)
        console.log("Empresa: ", this.empresa)
        console.log("Cargo: ", this.cargo)
        console.log("Setor: ", this.setor)
        console.log("Salario R$: ", this.salario)
    }

    this.trabalhaNoRh = function() {
        if (this.setor === "RH") {
            console.log(this.nome, "Trabalha no rh ")
        } else {
            console.log(this.nome, "Não trabalha no rh")
        }
    }

    this.Aumentarsalario = function(ValordoAumento){
        this.salario = this.salario + ValordoAumento

    }

}


let funcionarioA = new Funcionario("Igor", "RH", "Assistente", 2000)
let funcionarioB = new Funcionario("Paulo", "TI", "Analista", 10000) 
let funcionarioC = new Funcionario("Roberto", "RH", "Assistente",2400)






funcionarioA.Aumentarsalario(500)
funcionarioA.exibieInfos()
funcionarioA.trabalhaNoRh()

funcionarioB.Aumentarsalario(500)
funcionarioB.exibieInfos()
funcionarioB.trabalhaNoRh()

funcionarioC.Aumentarsalario(500)   
funcionarioC.exibieInfos()
funcionarioC.trabalhaNoRh()

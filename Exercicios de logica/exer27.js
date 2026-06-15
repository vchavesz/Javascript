let meuCarro ={
    marca: "Volskwagem",
    modelo: "Fusca",
    ano: 1970,
    km: 30000,
    ligado: false,
    ligarCarro: function(){
       this.ligado = true
        console.log(this.modelo, "Carro ligado! Vruumm!")
    }
}

meuCarro.ligarCarro()
function pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade ++
        console.log(this.idade)
    }.bind(this), 1000) //1000 = milisegundos
} //bind(this) pra amarrar o this do objeto(pessoa) ao this da função(anonima)

new pessoa //criando o objeto

//Artificio Tecnologico vulgo gambiarra (instrutor comentou q muitos codigos tem isso mas n é recomendado)
function pessoa1(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade ++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //1000 = milisegundos
} //bind(this) pra amarrar o this do objeto(pessoa) ao this da função

new pessoa1
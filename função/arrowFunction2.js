//this fixo, é um this que é baseado no contexto no qual a função foi escrita, e o fato de que a função ta sendo chamada de locais diferentes nao influencia o valor do this

function pessoa(){ //mesmo exemplo feito em thisEBind2 - usando arrow function
    this.idade = 0
    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}
//uma das grandes vantagens da função arrow é que o this nao fica variando
new pessoa
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Joao')//quando cria ele passa o parametro pra linha 2 e executa o resto
p1.falar()
//o this é necessario em uma classe e em uma funcao factory ele nao é necessario
//usando função factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Alvaro')
p2.falar()
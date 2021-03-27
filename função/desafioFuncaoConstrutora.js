/*class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Joao')//quando cria ele passa o parametro pra linha 2 e executa o resto
p1.falar()
*/
function pessoa(nome){
    this.nome = nome //posso usar o this ou nao, porem se quiser saber qual valor da variavel nome nao vou cinseguir se nao usar o this(linha 23) se tirar this saida é undefined

    this.falar = function(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p2 = new pessoa('Joana')
p2.falar()
console.log(p2.nome)
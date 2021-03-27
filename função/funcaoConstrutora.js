function Carro(velocidadeMaxima = 200, delta = 5){
    //criando variavel privada usa-se (let, const ou var(menos recomendada))
    let velocidadeAtual = 0

    //se quiser transofrmar algo para ser publico, para ser visto fora da função construtora usa-se o this, q é responsavel por tornar algo visivel pra fora da funcao.
    //metodo publico 
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro //posso passar ou nao passar parametros
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) //carro é uma função construtora
console.log(typeof ferrari)  //ferrari é um objeto que foi instanciado a partir da funcao construtora carro

/*A funcao construtora funciona como uma classe, como um molde
* e a partir desse molde voce pode criar quantos objetos voce quiser,
* e obviamente o dado interno daquela ele pertence a cada um dos objetos
* mesmo que seja um dado privado ou se for um dado que pertence ao this
*/
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //Chamando função diretamente
console.log(produto.getPreco())  //chamando função a partir de um objeto


//call e apply
const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro)) //vai pegar o valor do carro aplicar o valor de 20% e printar
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) //(contexto, parametros...) 
console.log(getPreco.apply(carro, [0.17, '$'])) //(contexto, [parametros...]) 

//diferenca entre call e apply é que APPLY espera que os parametros estejam dentr de um array
let valor //nao inicializada
console.log(valor) //imprime undefined
//undefined significa que uma variavel nunca foi inicializada 

valor = null //null significa que a variavel valor foi inicializada porem ela nao aponta pra nenhum endereço de memoria
console.log(valor)
//console.log(valor.toString()) //error! tomar cuidado com variaveis que possam ser null/undefined pois ela nao pode acessar nenhuma função sendo null/undefined

const produto = {}
console.log(produto.preco) //saida é undefined pois nao foi definido nenhum preço
//console.log(produto.preco.a) //error! pois nao é possivel ter um atributo em uma variavel undefined
console.log(produto) //saida é um objeto vazio {}

produto.preco = 3.50
console.log(produto) //a variavel nao esta mais indefinida, saida { preco: 3.5 }

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco) //saida é false, pois ele é undefined
delete produto.preco // para remover o atributo de um objeto usa-se o delete e nao o undefined!
console.log(produto)

produto.preco = null //sem valor
console.log(!!produto.preco) //falso pois o preco é null
console.log(produto) //saida { preco: null }

/* Não é legal atribuir undefined
* instrutor disse que é melhor deixar que
* a propria linguagem atribua undefined quando
* ela achar que for necessário
* ------------------------------
* SEMPRE USE NULO CASO QUEIRA ZERAR O VALOR DE UMA VARIAVEL.
* O null serve para, por ex: zerar uma variavel que está
* apontando para um endereco de memoria, entao atribuindo
* null ela nao ira apontar pra nada
*/
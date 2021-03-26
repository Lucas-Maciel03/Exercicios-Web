function comparaComThis(param){
    return console.log(param === this)
}

comparaComThis(global) //true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //false
comparaComThis(obj) //true

//se eu fizer uma funcao normal aponta para o global! se eu fizer uma função arrow não aponta para o global
console.log('-----')
let comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) //vc pode acessar O module.exports atraves do this
/*O this dentro de uma função padrao em javaScript varia de acordo com a chamada
* O this aponta para o objeto global tanto no browser quanto no node, entao tem q ter cuidado
* Já o arrow é uma função que tem mais logica
*/

//experiencia radical - o this de uma arrow nunca vai mudar
//o this de uma função arrow é um this associado ao contexto que uma função foi escrita, entao nao tem variacao de forma nenhuma, mesmo q se use o bind para mudar o contexto isso nao vai acontecer
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false
comparaComThisArrow(module.exports) //true

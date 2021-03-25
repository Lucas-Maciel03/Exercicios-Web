//arguments é um array interno de uma função
function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}
//o argument pega todos os parametros que foram passados na chamada de uma função e fazer qualquer tipo de operação nele
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Aloo"))
console.log(soma('a', 'b', 'c'))
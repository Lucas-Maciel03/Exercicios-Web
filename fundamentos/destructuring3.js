//destructuring em funcao, objeto dentro dos paramentros de uma funcao
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({lu: 28, min: 500, max: 600})) //ele so vai pegar os parametros onde as variaveis sao iguais as da funcao, o lu sera ignorado
console.log(rand({min: 990})) //alterna numeros entre 990 e 1000
console.log(rand({})) //alterna entre 0 e 1000
//console.log(rand())//error

/*
O método Math.random() retornará um número entre 0 e 1 (podendo incluir o 0 mas não o 1).
Exemplo: um número aleatório gerado = 0.87



O método Math.floor() arredonda um número para baixo para o número inteiro mais próximo, e retorna o resultado.

Exemplo: O valor 2.64 arrendondando (floor) = 2*/
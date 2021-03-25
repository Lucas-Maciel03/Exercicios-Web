//funcao com variavel
console.log('funcoes usando arrow function')

const soma = function(a, b) { //atribuindo funcao a uma variavel
    return a + b
}

const mult = (a, b) =>{ //funcao arrow
    console.log(a * b)
}

const dv = (a, b) => a - b //funcao com retorno implicito

const st = a => console.log(a) //funcao com 1 parametro

console.log(soma(2, 5))
mult(3, 9)
console.log(dv(4,2))
st('uiuias')

console.log('funcoes usando o function')

function somafun(a, b){ //funcao sem retorno
    console.log(a + b)
}

function multfun(a, b){ //funcao com retorno
    return a * b
}

somafun(8, 7)
console.log(multfun(5, 8))
console.log('arrays e objects')
const abc = {nome: 'lucas', preco: 11}
const arr = [5, 4, 8, 3]

console.log(arr)
console.log(arr.pop()) //removendo ultimo indice
console.log(arr)
delete arr[1] //removendo indice 1
arr.push('alc')
console.log(arr)

console.log('Object')
console.log(abc)
abc.nome1 = 'lory'
abc.preco1 = 11.45
console.log(abc)

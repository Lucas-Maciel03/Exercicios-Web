//destructuring em Array
const[a] = [10]
console.log(a)

//pegar varios valores de dentro de um array e tirar de dentro da estrutura os valores
const [n1, , n3, , n5, n6=0] = [10, 9, 5, 4] //é possivel pular numeros
console.log(n1, n3, n5, n6) //= [n1, n2, n3, n4]

//nao recomendado, exemplo so pra conhecimento msm
const [, [, num]] = [[, 2, 3], [7, 6, 8]]
console.log(num)

const ar = [1, 4, 15 ,8, 3]
const [x, b, c, d, e] = ar
console.log(x, b, c, d, e)
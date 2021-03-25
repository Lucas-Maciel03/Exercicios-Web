const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, typeof peso1, Number.isInteger(peso1))
console.log(peso2, typeof peso2, Number.isInteger(peso2)) //se fosse um numero.0 seria inteiro

const avaliacao1 = 9.715
const avaliacao2 = 6.715

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1 + peso2)

console.log(media.toFixed(2)) //comando toFixed formata o numero de casas decimais
console.log(media.toString()) //converte para string
console.log(media.toString(2)) //converte para binario
console.log(typeof Number)

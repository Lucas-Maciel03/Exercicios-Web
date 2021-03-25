console.log('01)', '1' == 1) //operador == nao compara tipos, compara apenas valor, saida: true
console.log('02)', '1' === 1) //operador === compara tipo e valor saida: false
console.log('03)', '3' != 3) //operador != so compara valor
console.log('04)', '3' !== 3) //operador !== compara valor e tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2) 
console.log('07)', 3 <= 2) 
console.log('08)', 3 >= 2) 

const d1 = new Date(0) //o 0 significa data de referencia do js, 01/01/1970
const d2 = new Date(0) //o 0 significa data de referencia do js, 01/01/1970
console.log('09)', d1 == d2) //nesse caso nao faz diferenca os operadores == ou === pois ele vai comparar enderecos de memoria 
console.log('10)', d1 === d2)
console.log('11)', d1.getTime == d2.getTime) //true pois agr esta comparando os valores em milisec

console.log('12)', undefined == null) //true
console.log('12)', undefined === null)//false


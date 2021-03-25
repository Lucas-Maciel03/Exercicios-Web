//destructuring em funcao, array dentro dos paramentros de uma funcao

function rand([min = 0, max = 1000]){
/*if( min > max)se min for menor q max 
*[min, max] utilizando operador desestructuring
*[max, min] criando array com os dois atributos declarados na função
*se min for menor que max vai usar o operador destructuring para inverter as variaveis
*/
    if( min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([90, 80])) //
console.log(rand([5,10])) //passando valor dos dois 
console.log(rand([500])) //passando apenas o valor do min
console.log(rand([, 15])) //passando apenas o valor do max
console.log(rand([])) //passando nenhum valor
//console.log(rand()) //error
const resultado = nota => nota >= 7.0 ? 'Aprovado' : 'Reprovado'
//nota >= 7.0 (expressao relacional) - 1º Operando
//operador ternario ? 'aprovado' (se der verdadeiro retorna aprovado) - 2º Operando
// : 'reprovado' (se der falso retorna reprovado) - 3º Operando
console.log(resultado(7.1))
console.log(resultado(6.3))

function a(){
    console.log('qw')
    return 1
}

const arrayy = [5, 7, 5]

const obj = {
    nome: 'lucas',
    idade: 18
}

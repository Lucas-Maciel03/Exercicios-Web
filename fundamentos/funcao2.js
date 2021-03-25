//armazenando funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

//armazenando função arrow em um avariavel
const soma = (a, b) => {
    return a + b    
}  
console.log(soma(1, 3))

// retorno implicito
const subtracao = (a, b) => a - b 
//constante nomefuncao = "(a,b)parametros" "=>funcaoArrow" "a-b retorno"
console.log(subtracao(1, 2))

//retorno de apenas um valor
const imprimir2 = a => console.log(a)
imprimir2('lucas ui')
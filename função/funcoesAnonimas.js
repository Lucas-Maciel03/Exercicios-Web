const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y){ //a opreação se n passar nada pra ela por padrao ela soma mas como passei um parametro ela diminuiu o valor
    return x - y
}) //instrutor falou que funcao como parametro é uma coisa que se usa muito dentro da linguagem
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log('opa!')
    }
}
pessoa.falar() //acessar função anonima a partir de um objeto que foi definido chave e valor4

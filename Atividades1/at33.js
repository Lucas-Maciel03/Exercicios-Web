function concatenar(string, inteiro, real){
    const resultado = [].concat(string, inteiro, real)
    for (i in resultado){
        console.log(`${i} - ${resultado[i]}`)
    }
    return console.log(resultado)
}

const string = ['Azul', 'Amarelo', 'Preto', 'Branco']
const inteiro = [5, 10, 8, 3]
const real = [4.2, 1.5, 2.3, 7.1]
concatenar(string, inteiro, real)
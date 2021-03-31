function mediaVetor(valores){
    let soma = 0
    for (i in valores){
        soma += valores[i]
    }
    return soma / valores.length
}
const valores = [5, 7, 3, 8, 6, 1, 2, 4]
console.log(mediaVetor(valores))

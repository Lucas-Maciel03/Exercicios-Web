function vetor(numeros){
    
    let fora = 0, dentro = 0
    for(const i in numeros){
        numeros[i] >= 10 && numeros[i] <=20 ? dentro++ : fora++
    }

    return console.log(`Fora: ${fora} / dentro: ${dentro}`)
}

const numeros = [2, 7, 9, 15, 12, 20, 9, 27, 10]
vetor(numeros)
const vet = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
vetor(vet)
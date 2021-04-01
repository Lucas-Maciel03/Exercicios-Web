const trocarValores = (vetA, vetB) => {
    if(vetA.length == vetB.length){
        for(let i = 0; i < vetA.length; i++){
            vetA[i] = vetB[i] + vetA[i]
            vetB[i] = vetA[i] - vetB[i]
            vetA[i] = vetA[i] - vetB[i]
        }
    } else{
        return console.log('Vetores de tamanhos diferentes')
    }
    console.log(`Vetor A: ${vetA}`)
    console.log(`Vetor B: ${vetB}`)
}

let vetA = [1, 2, 3, 4]
let vetB = [5, 6, 7, 8]

trocarValores(vetA, vetB)
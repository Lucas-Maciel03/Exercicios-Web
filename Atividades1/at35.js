function adicionarVetor(vetorPilha, vetorAdicionar){
    for(let i = 0; i < vetorAdicionar.length; i++){
        vetorPilha.push(vetorAdicionar[i])
        
    }
    return vetorPilha
    return vetorPilha = [].concat(vetorPilha, vetorAdicionar)
}

const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdicionar = [6, 7, 8, 9, 10]

console.log(adicionarVetor(vetorPilha, vetorAdicionar))
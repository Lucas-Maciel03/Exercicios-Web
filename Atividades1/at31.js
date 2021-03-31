const numerosNegativos = (vetor) => {
    let negativo = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            negativo ++
        }
    }
    return negativo
}
const valores = [-4, 5, 9, -7, -1, -55, 9, 4, 10, -2, 0]
console.log(numerosNegativos(valores))
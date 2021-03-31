let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function retorno(){
    let ponto = stringPontuacoes.split(", ")
    let piorJogo = 0    
    let quantidade = 0
    let maior = ponto[0]
    let menor = ponto[0]

    for (let i=0; i < ponto.length; i++){
        if(ponto[i] > maior){
            maior = ponto[i]
            quantidade++
        } else if(ponto[i] < menor){
            piorJogo = i + 1
        }
    }
    return [quantidade, piorJogo]

}

console.log(retorno())
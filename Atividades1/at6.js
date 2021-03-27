function simples(capital, juros, tempo){
    juros = capital * juros * tempo
    let montante = capital + juros
    return montante
}

console.log(simples(1200, 2.5/100, 10))

function composto(capital, juros, tempo){
    let montante = capital * (1 + juros) ** tempo
    return montante.toFixed(2)    
}

console.log(composto(2000, 2/100, 12))

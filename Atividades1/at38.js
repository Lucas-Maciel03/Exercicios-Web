function imprimir(inicio = 0, fim = 100){
    
    if(fim < inicio){
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim
    }
    console.log(inicio, fim)
    inicio = isNaN(inicio) ? 0 : inicio
    fim = isNaN(fim) ? 100 : fim
    for(let i = inicio; i <= fim; i++){
        if(i % 2 !== 0){
            console.log(`numero ${i}`)
        }
    }
}

imprimir(25, 3)
imprimir()
imprimir('oi')
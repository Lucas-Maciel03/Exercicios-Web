function vetorInteiros(valores){
    let menor, maior
    //for(let i = 0; i < valores.length; i++){
        menor = Math.min.apply(Math, valores)
        maior = Math.max.apply(Math, valores)
        return console.log(`min ${menor} maior: ${maior}`)
    //}
}

valores = [2,3,4,6,7,8,1,44, 98, 5, 7]
vetorInteiros(valores)

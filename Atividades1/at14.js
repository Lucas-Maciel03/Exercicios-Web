//maca, kiwi, melancia

const classificação = fruta => {
    switch(fruta){
        case 'maça':
            console.log(`Nao Vendemos ${fruta} aqui`)
            break
        case 'kiwi':
            console.log(`Estamos com escassez de ${fruta}`)
            break
        case 'melancia':
            console.log(`Aqui está a ${fruta}, são 3 reais o Kg`)
            break
        default:
            console.log('Erro!')
    }   
}

classificação('kiwi')
classificação('melancia')
classificação('maça')
classificação('Banana')

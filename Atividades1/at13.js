const diaUtil = dia => {
    switch(dia){
        case 1: 
        console.log(`${dia} - Domingo não é dia útil`)
        break
        case 2:
            console.log(`${dia} - Segunda é dia Util`)
            break
        case 3:
            console.log(`${dia} - Terça é dia útil`)
            break
        case 4:
            console.log(`${dia} - Quarta é dia útil`)
            break
        case 5:
            console.log(`${dia} - Quinta é dia útil`)
            break
        case 6:
            console.log(`${dia} - Sexta é dia útil`)
            break
        case 7:
            console.log(`${dia} - Sabado não é dia útil`)
            break
        default:
            console.log('Numero invalido')
    }
}

diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)
diaUtil(8)
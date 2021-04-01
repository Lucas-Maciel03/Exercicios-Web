function status(notas){
    for(let x = 0; x < notas.length; x++){
        if(notas[x] >= 0 && notas[x] < 5){
            console.log('Conceito D')
        } else if(notas[x] >= 5 && notas[x] < 7){
            console.log('Conceito C')
        } else if(notas[x] >=7 && notas[x] < 9){
            console.log('Conceito B')
        } else if(notas[x] >=9 && notas[x] <= 10){
            console.log('Conceito A')
        } else {
            console.log('Nota esta com valor menor que 0 ou maior que 10')
        }
    }
}

const notas = [5.3, 10, -1, 7.1, 4.9, 12]
status(notas)
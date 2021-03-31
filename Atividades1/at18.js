function nomeExtenso(numero){
    switch(numero){
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8 :
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Número fora do intervalo'        
    }
}

console.log(nomeExtenso(1))
console.log(nomeExtenso(2))
console.log(nomeExtenso(3))
console.log(nomeExtenso(4))
console.log(nomeExtenso(5))
console.log(nomeExtenso(6))
console.log(nomeExtenso(7))
console.log(nomeExtenso(8))
console.log(nomeExtenso(9))
console.log(nomeExtenso(10))
console.log(nomeExtenso(11))
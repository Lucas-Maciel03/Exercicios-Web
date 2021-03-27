function triangulos(l1, l2, l3){
    if(l1 === l2 && l2 === l3){ //todos os lados iguais
        return console.log('Triangulo Equilatero')
    } else if(l1 === l2 || l1 === l3 || l2 === l3){ //dois lados iguais
        return console.log('Triangulo Isosceles')
    } else{ //todos os lados diferentes
        return console.log('Triangulo Escaleno')
    }
    
}
triangulos(2, 2, 2)
triangulos(5, 3, 5)
triangulos(1, 23, 3)
//Parametros e retornos sao opcionais em JS
function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido ${area}m2`)
    } else{
        return area
    }
}

console.log(area(2, 5)) //saida = 10
console.log(area(2))//NaN
console.log(area())//NaN
console.log(area(2, 3, 13, 17, 22)) // saida = 6
console.log(5, 5) //saida: valor acima... e undefined pois nao entrou no else

//uma hora você pode retornar um valor numérico, Você pode retornar uma string.

//Você pode simplesmente decidir não retornar nada, Tudo isso é aceitável em JavaScript.

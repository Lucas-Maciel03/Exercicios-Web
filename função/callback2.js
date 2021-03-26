const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas = []
//sem o callBack
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//usando callBack
const notasBaixas2 = notas.filter(function(nota){ //filter retorna verdadeiro ou falso
    return nota < 7 
})
 
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//uma forma elegante de se escrever o mesmo codigo da linha 20-21
const notasMenorQue7 = nota => nota < 7 //criandouma funcao que pode ser usada em qualquer lugar do sistema
const notasBaixas4 = notas.filter(notasMenorQue7)//passando pro filter, armazene essa função notasMenorQue7 e chame essa funcao quando ocorrer um evento
console.log(notasBaixas4)
let contador = 1
console.log('-----WHILE-----')
while(contador <= 10){
    console.log(`valor = ${contador}`)
    contador++
}
console.log('-----FOR-----')
//forma de escrever isso em for
for(let i = 1; i <= 10; i++){
    console.log(`valor = ${i}`)
}

const notas = [2.5, 3.3, 5.8, 9.4, 7.1]
console.log('-----Array-----')
for(let i = 0; i < notas.length; i++){
    console.log(notas[i])
}
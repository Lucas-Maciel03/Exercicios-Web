//continue para a repeticao atual e vai para a proxima, so funciona em estruturas de repeticao
//break age em estruturas(for, while, switch), break sai do laço

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Exemplo continue, vai chegar no indice 5 e parar a repeticao')
for(x in nums){
    if(x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('Exemplo continue, vai pular o indice 5')

for(x in nums){
    if(x == 5){
        continue
    }
    console.log(`${x} = ${nums[x]}`)
}

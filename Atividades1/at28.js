const paresImpares = () => {
    const valores = [3, 5, 8, 12, 9, 15]
    let impar = 0
    let par = 0
    for(const i in valores){
        valores[i] % 2 === 0 ? par++ : impar++
    }
    return console.log(`Quantidade pares: ${par} / Quantidade impares: ${impar}`)
}

paresImpares()

console.log('----------------------------')
console.log('Usando o for e o length')

function parImpar(numeros){    
    let impar = 0
    let par = 0
    for(let i=0; i < numeros.length; i++){
        numeros[i] % 2 === 0 ? par++ : impar++
    }
    return console.log(`Quantidade pares: ${par} / Quantidade impares: ${impar}`)
}
const numeros = [1, 3, 5, 20, 8, 12, 11, 9, 15]
parImpar(numeros)
const imprimirAleatorio = (min, max) =>{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let op = 0
let qtd = 0
do{
    op = imprimirAleatorio(-1, 10)
    console.log(`O valor sorteado foi: ${op}`)
    qtd++
}while(op != -1);

console.log(qtd)
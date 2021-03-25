//Estrategia 1 para gerar valor padrao
function soma(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma(), soma(3), soma(1,2,3), soma(0,0,0)) //parametro 0,0,0 da falso, tornando a função limitadae retornando 3

//estrategia 2, 3, 4 para gerar valor padrao7
function soma2(a, b, c){
    a = a !== undefined ? a : 1 //se a for diferente de undefined a recebe a, senao a = 1
    b = 1 in arguments ? b : 1 //dentro de arguments existe o indice 1? se existir pegue valor de b e adicione em b, senao adicione 1
    c = isNaN(c) ? 1 : c //se c for um NaN c recebe 1, senao c recebe valor de c 
    //segundo instutor de todas as estrategias a mais segura é a do NaN
    return a + b + c
}
//recomendado 2 c = isNaN(c) ? 1 : c
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))// 3

//valor Padrao do ES2015 (RECOMENDADO)
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
function notas(nota){
    if(nota >= 38 && nota <= 100){
        for(let i = 0; nota % 5 !=0; i++){
            nota += 1
        }
    } else {
        return `Reprovado: ${nota}`
    } 
    return `Aprovado: ${nota}`
}
console.log(notas(37))
console.log(notas(38))
console.log(notas(28))
console.log(notas(39))
console.log(notas(40))
console.log(notas(47))
console.log(notas(74))

/*function notas(nota){
    md = 40 - nota 
    if(nota < 38){
        return `Reprovado: ${nota}`
    } else if(nota >= 40 && nota <= 100){
        for(let i = 0; nota % 5 !=0; i++){
            nota += 1
        }
    } else if(md < 3){
        if(nota % 2 == 0){
            nota = nota + 2
        } else{
            nota = nota + 1
        }
    }
    return nota
}
*/
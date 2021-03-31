const notas = (n1, n2, n3, codigo) => {
    let media = (n1 * 3 + n2 * 3 + n3 * 4) / (3 + 3 + 4)
    if(media >= 5 && media <= 10){
        return console.log(`Status: Aprovado / Codigo Aluno: ${codigo} / notas: ${n1}, ${n2}, ${n3}`)
    } else if(media < 5){
        console.log('Reprovado')
    } else {
        console.log('Media está incorreta')
    }
}

notas(5, 6, 7, 999)
notas(10, 10, 80, 109)
notas(2, 5, 5, 555)
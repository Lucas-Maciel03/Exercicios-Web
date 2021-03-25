const notas = [5.5, 8.1, 7.6, 4.4, 9.3]
//nao é interessante usar esse for in para array, pois existem outras opções
console.log('For in para percorrer um Array')
for (let i in notas){
    console.log(`${i} - ${notas[i]}`)
}

const pessoa = {
    nome: 'Lory',
    sobrenome: 'Silva',
    idade: 13,
    peso: 44
}

//é insteressante usar essa forma(for in) para objeto
console.log('For in para percorrer um objeto')
for(let atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}
function funcao1(vet, num){
    const resultados = []
    
    vet.forEach(x => {
        resultados.push(x * num)
    });
    
    return resultados
}

vet = [1, 1, 1, 2]
console.log(funcao1(vet, 2))
vet = [4, 9, 5, 2]
console.log(funcao1(vet, 2))

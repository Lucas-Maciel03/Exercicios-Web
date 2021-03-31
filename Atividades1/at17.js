const aumento = (salario, plano) => {
    switch(plano){
        case 'A':
            return salario = salario  + (salario * 0.10)
        case 'B':
            return salario = salario + (salario * 0.15)
        case 'C':
            return salario = salario + (salario * 0.20)
        default:
            return 'Plano inválido'
    }
}

console.log(aumento(100, 'A'))
console.log(aumento(100, 'C'))
console.log(aumento(100, 'B'))
console.log(aumento(100, 'D'))
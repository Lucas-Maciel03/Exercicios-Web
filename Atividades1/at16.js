function calculadora(x, y, operador){
    switch(operador){
        case '+':
            console.log(`${x} + ${y} = ${x + y}`)
            break
        case '-':
            console.log(`${x} - ${y} = ${x - y}`)
            break
        case '*':       
            console.log(`${x} * ${y} = ${x * y}`)
            break
        case '/':
            console.log(`${x} / ${y} = ${x / y}`)
            break
        default:
            console.log('Operação Invalida')
    }
}

calculadora(5, 10, '+')
calculadora(8, 4, '-')
calculadora(3, 9, '*')
calculadora(20, 5, '/')
calculadora(5, 10, '%')
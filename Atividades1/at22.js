function valorPago(mes, valor){
    if(mes < 13 && mes > 0){
    let atraso = mes - 1
    return (valor * ((1 + (5/100)) ** atraso)).toFixed(2) 
    } else{
        return 'Mes invalido'
    }
}

console.log(valorPago(2, 10))
console.log(valorPago(15, 10))
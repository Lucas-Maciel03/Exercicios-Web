function imprimirValor(valor1){
    return valor1.toFixed(2).toString().replace('.', ',')
    //ou
    return valor1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

console.log(imprimirValor(0.1 + 0.2))
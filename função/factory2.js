function criarProduto(nome, valor){
    return {
        nome: nome, //pode botar dessa forma ou da forma da linha 4
        valor,
        desconto: 0.1
        //uma funcao factory pode retornar dados e tambem pode retornar funcoes que estao dentro do objeto
    }
}

console.log(criarProduto('Arroz', 5.50))
console.log(criarProduto('Macarrao', 3.20))
console.log(criarProduto('Sorvete', 10.00))
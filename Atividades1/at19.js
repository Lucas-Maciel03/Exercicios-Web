function pedido(codigo, quantidade){
   switch(codigo){
        case 100:
            console.log(`Lanche: Cachorro Quente, preço ${quantidade * 3.0}`)
            break
        case 200:
            console.log(`Lanche: Hambúrguer Simples, preço ${quantidade * 4.0}`)
            break
        case 300:
            console.log(`Lanche: Cheeseburguer, preço ${quantidade * 5.50}`)
            break
        case 400:
            console.log(`Lanche: Bauru, preço ${quantidade * 7.50}`)
            break
        case 500:
            console.log(`Lanche: Refrigerante, preço ${quantidade * 3.50}`)
            break
        case 600:
            console.log(`Lanche: Suco, preço ${quantidade * 2.80}`)
            break
        default:
            console.log('Codigo Inválido')
    }
}

pedido(100, 2)
pedido(200, 2)
pedido(300, 2)
pedido(400, 2)
pedido(500, 2)
pedido(600, 2)
pedido(700, 2)
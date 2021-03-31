function vendaCarros(carro){
    switch(carro){
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')

    }
}

vendaCarros('sedans')
vendaCarros('motocicletas')
vendaCarros('hatch')
vendaCarros('caminhonetes')
vendaCarros('mobilete')

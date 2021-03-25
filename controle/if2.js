function teste1(num) {
    if(num > 7)
        console.log(num)
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ';', não usar com as estruturas de controle
        console.log(num)//vai executar normalmente pois nao esta ligado a estrutura de repeticao que esta sendo fechada com o ;
    }
}

teste2(5)
teste2(9)
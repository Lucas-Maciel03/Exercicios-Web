//exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu')      //passei a funcao(function(e)) pro onclick e 
                                         //quando ocorreu o evento chama ele
}
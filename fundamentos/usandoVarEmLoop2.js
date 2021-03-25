const funcs = []

for(var i=0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
//como a variavel i(var) nao tem escopo ela vai imprimir 10, isso é um problema historico de java script
funcs[2]()
funcs[8]()
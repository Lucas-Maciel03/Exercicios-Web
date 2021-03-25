const funcs = []

for(let i=0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    }) //como a variavel i tem escopo de bloco, no momento em qua a função foi definida ela vai lembrar, ter essa memoria, de qual era o valor de i naquele momento, entao pra cada repetição o i(que tem escopo de bloco) vai ter o seu espaço entao existe essa memoria de qual indice aponta pro numero correspondente, diferente do exemplo com var.
    //isso tem a ver com o conceito de closer, onde uma função tem consiencia do local onde ela foi definida 
}
//como a variavel i(let) ntem escopo ela vai imprimir os valores correspondentes, difentemente do tipo de delcaração var
funcs[2]()
funcs[8]()
// Closure é o escopo criado quando uma função é declarada 
//esse escopo permite a função acessar e manipular variaveis externas à função, o escopo que envolve a declaração da funcao é chamado de closure

const x = 'Global'

function fora(){
    const x = 'Local'

    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) //local pois ele tem memoria do local em que foi declarado
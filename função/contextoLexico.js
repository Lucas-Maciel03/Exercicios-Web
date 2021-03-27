const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao() //por conta do contexto em que a função foi escrita a minhaFuncao() vai executar o valor 'global'. pq quando uma funcao for declarada dentro de js ela nao tem apenas seu conteudo interno, nome, parametro, ela tambem tem conciencia do local em que foi definida entao ela vai procurar dentro do escopo lexico em que foi definida e nao no local de execucao, isso tem tudo a ver com conceito de closure 
}

exec()
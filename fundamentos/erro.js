//try é um bloco que potencialmente pode gerar algum tipo de erro
//catch captura o erro
//finally é o bloco que é executado independentemente se deu erro ou nao

function lancarErro(erro){
//voce pode lancar varios tipos de erros como mensagens 
    //throw new Error('....')
    //throw 10
    //throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        datea: new Date
    }
}

function imprimirNome(obj){
    try{
        return console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        lancarErro(e)
    } finally{
        console.log('finalizou')
    }
}

const obj = {nome: 'aaaaa'} //erro esta aqui na variavel nOme deveria ser nAme
imprimirNome(obj)

//OBSERVAÇÃO IMPORTANTE, TENTE EVITAR MOSTRAR PRO USUARIO INFORMAÇÕES DO SISTEMA, DETALHES DE INFRAESTRUTURA, MENSAGENS DE STACKTRACE, MENSAGENS QUE NAO FACAM SENTIDO PRO USUARIO. O IDEAL É QUE SE JOGUE UMA MENSAGEM GENERICA PARA QUE O USUARIO LEIA ALGUM CODIGO. OU ENTAO GERAR UM HASH QUE É GERADO NO LOG DO SISTEMA, AI O USUARIO TE MANDA AQUELE HASH E VOCE CONSEGUE LOCALIZAR EXATAMENTE QUAL FOI O ERRO QUE ACONTECEU NO LOG QUE CAUSOU AQUELE ERRO NO SISTEMA

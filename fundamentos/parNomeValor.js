//par chave valor
const saudacao = 'eae' //contexto lexico 1

function exerc() {
    const saudacao = 'Salvee'  //contexto lexico 2
    return saudacao
}
//objetos sao pares aninhados chave valor
const Client = {
    nome: 'Lucas',
    idade: 18,
    peso: 55.0,
    Endereco: {
        nome: 'rua daora',
        casa: 19
    }
}

console.log(saudacao)
console.log(exerc())
console.log(Client.Endereco.nome)
console.log(Client.nome)
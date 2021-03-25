// novo recurso introduzido no ES2015
//destructuring em Objeto
const Pessoa = {
    nome: 'Lucas',
    idade: 18,
    endereco:{
        rua:'Marrecas',
        numero: 1050
    }
}
console.log(Pessoa)

//const TIRE(extraia) DE DENTRO DO OBJETO O ATRIBUTO{NOME E IDADE}, QUAL OBJETO(=) PESSOA
const {nome, idade} = Pessoa // é uma forma de extrair dados de um objeto e atribuir as suas respectivas variaveis
console.log(nome, idade) 

//exemplo mudando o nome da variavel
const {nome: n, idade: id} = Pessoa
console.log(n, id)

//acessando atributos que nao existem, n da erro porem retornam undefined
const {altura, humor=true} = Pessoa
console.log(altura, humor)

//acessando objetos dentro do objeto
const {endereco: {rua, numero, cep}} = Pessoa //{nome obj: {variaveis}} = objeto
console.log(rua, numero, cep)

//cuidado quando for desestruturar uma estrutura aninhada para que os dados estejam setados ate pegar o ultimo valor
/*
const {conta: {agencia, num}} = Pessoa //error pois o objeto nao existe e as variaveis tbm nao
console.log(agencia, num)
*/
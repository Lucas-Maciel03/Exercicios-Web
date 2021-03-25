//a forma de criar objeto em javaScript é atraves de função
//vc pode criar objetos em js atraves da instancia new
console.log(typeof Object)
console.log(typeof new Object)//pode conter parenteses ou nao vc decide Object()

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{}
console.log(typeof Produto)
console.log(typeof new Produto())

/*Em Javascript a classe internamente é uma função, ou seja, a classe que foi recentemente adicionada a linguagem JS, é uma forma diferente de se escrever função, mas normalmente isso não é verdade em outras linguagens.
Isso é uma peculiaridade bem específica do Javascript.*/

//um exemplo que fiz
function Cadastro(nome, endereco, idade) { //cirando uma funcao
    this.nome = nome;
    this.endereco = endereco;
    this.idade = idade;
}
let cad = new Cadastro('Lucas', 'rua 1', 18) //criando um objeto
let cad1 = new Cadastro('Lory', 'rua2', 13) //criando um objeto
console.log(cad1.endereco, cad.idade)
console.log(cad, cad1)

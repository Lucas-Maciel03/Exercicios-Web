//Função em JS é First-Class Object (Citizens)
//Higher-Order function

//criar de forma literal
function fun1(){ } //obs se vc nao botar return ela retorna undefined

//Armazenar em uma variavel
const fun2 = function (){ }

//Armazenar em um array
const array = [function(a, b){return a - b}, fun1, fun2]
console.log(array[0](5, 2))
//declarar a função na construção do array nao é muito comum, é mais facil criar uma função anonima, armazenar em uma variavel e depois adicionar no array 

//armazenar em um atributo de objeto
const obj ={ }
obj.falar = function(){return 'Salve'}
console.log(obj.falar())

//passar função como parametro
function run(fun){
    fun() //chamando uma função
} //é uma tecnica mt poderosa

run(function() {console.log('Executando...')})
//run('oi') //erro pois nao foi passado uma função como parametro

//uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4) //saida 9
const cincoMais = soma(2,3)
console.log(typeof cincoMais)
cincoMais(4) //saida 9
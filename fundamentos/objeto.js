/*Um objeto em JS é uma coleção de chave(variavel) e valor(dados)
*vc tem um nome do atrivuto(indentificador) e 
*vc passaa um valor pra ele que pode ser de qualquer tipo
***Resumindo, um objeto é um grupo de pares chave e valor 
*/
// um objeto pode ser criado com valores, porem nesse sera criado vazio

const prod1 = {}; // para criar um objeto usa-se as chaves {}
prod1.nome = 'Celular ultra'; //aqui estamos criando o nome dinamicamente no objeto
prod1.preco = 4998.90;
prod1 ['Desconto Legal'] = 0.40 //evitar atributos com espaco

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2);

 /*Objetos podem estar dentro de outros objetos
const prod3 = {
    nome: 'Camisa Polo',
    preco: 79.90,
        obj: {
            blabla: 1,
            objm: {
                bbb: 2
            }
        }  
}
console.log(prod3) -> {
                        nome: 'Camisa Polo',
                        preco: 79.9,
                        obj: { blabla: 1, objm: { bbb: 2 } }
                       }
*/


/*Notação de um json 
* '{"nome": "Camisa Polo", "preco": 79.90}'
* json nao é a mesma coisa que um objeto, 
* json é um formato textual, objeto é uma colecao de chaves e valores
* a partir de um objeto é possivel gerar um json
*/
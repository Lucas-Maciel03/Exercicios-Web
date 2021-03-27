//IIFE -> Immediately Invoked Function Expression
(function(){ //alternativa para fugir do escopo global é criar uma função anonima delimitada por parenteses 
    console.log('Será executado na Hora!')
    console.log('Foge do escopo mais abrangente, pq tudo que declarar aqui vai estar dentro do contexto dessa função!')
})() //os parenteses() invocam a funcao

//linha 8, 9 é a mesma coisa que a 3,4 porem linha 3e4 nao esta tocando o escopo global 
console.log('Será executado na Hora!')
console.log('Foge do escopo mais abrangente, pq tudo que declarar aqui vai estar dentro do contexto dessa função!')
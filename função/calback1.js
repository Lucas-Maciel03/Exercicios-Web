const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

//ideia do callback é passar uma função para outra função e quando determinado evento(o evento no caso do exemplo é cada um dos elementos percorridos no array) acontecer, a funcao que fopi passada sera disparada(chamada de volta). essa função callback pode ser chamada varias vezes ou pode ser chamada apenas uma unica vez vai depender do contexto em que está passando a funççao

//for each é uma funcao do array e eu quero que pra cada elemento do array ele chame a funcção imprimir e passe como parametro o nome e indice
fabricantes.forEach(imprimir)

fabricantes.forEach(function(a){
    console.log(a) //exibira os valores do array
})

//ideia do callback é passar uma função para outra função e quando determinado evento(o evento no caso do exemplo é cada um dos elementos percorridos no array, entao pra cada elemento ele chama o callback passando o valor e indice ) acontecer
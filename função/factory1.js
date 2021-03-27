//funcao factory é uma função que retorna um objeto! por isso o nome factory pq ela tem a funçao de fabricar uma instancia de um objeto
//entao sempre que eu chamar a funcao criarPessoa eu vou estar retornando um novo objeto
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Maria'
    }
}

console.log(criarPessoa())
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar //Adicionando a funcao falar na variavel falar
falar() //conflito entre paradigmas funcional e OO

//O bind voce passa um objeto no qual voce quer que seja resolvido o this ou seja .bind(objeto)
const falarPessoa = pessoa.falar.bind(pessoa)
//a funcao da linha 9 é diferente da função da linha 13

falarPessoa()
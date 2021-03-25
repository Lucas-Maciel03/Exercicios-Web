//variaveis var sao globais, ou seja se nao estiverem dentro de uma função podem ser vistas por todo o programa. variaveis com o var tem escopo de funcao e escopo global
{
    {
        {
            var valor1 = 23
        }
    }
}

console.log(valor1)

function ret(){
    var valor2 = 15
    console.log(valor2)
}
//console.log(valor2) erro pois so pode ser visto dentro do escopo
ret();
//console.log(valor2) //error pois a variavel valor2 só pode ser vista dentro do escopo da funcao
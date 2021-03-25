var num1 = 5
{
    console.log(num1) //saida 5
    {
        {
            var num1 = 12
            console.log(num1) //saida 12
        }
    }
}
console.log(num1) //saida 12

//so nao pode ser visto quando esta declaradp dentro de uma funcao
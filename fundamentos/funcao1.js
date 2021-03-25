/*Função é um trecho de codigo que tem nome, onde esse trecho pode ser reusado em qualquer lugar do programa, a funcao no inicio recebe os dados, apos isso ela realiza oq tem que ser feito e no final retorna um resultado.
Em resumo uma função é um bloco de codigo nomeado para que voce possa chamar esse bloco de codigo quantas vezes quiser para poder usar esse trecho de codigo agrupado pela funcao. A função recebe parametro de entradas, a partir dai é executado o algoritmo(passo-a-passo) e no final retorna um valor.
UMA FUNÇÃO PODE NAO RECEBER NENHUM PARAMETRO; UMA FUNÇÃO PODE NAO RETORNAR DADOS; EXISTEM VARIAS POSSIBILIDADES 
*/

//Exemplo de função sem retorno
function resultadoSoma(a, b){
    console.log(a + b);
}

resultadoSoma(2, 3); // saida = 5
resultadoSoma(2); //o segundo valore sera undefined pois ele nao foi passado para a funcao- saida: NaN
resultadoSoma(2, 3, 4, 5, 6);// vai funcionar normal, o js irá pegar os 2 primeiros numeros e ignorar o resto - saida = 5
resultadoSoma(); //saida = NaN

//Exemplo de função com retorno
function soma(a = 1, b = 1){ //adicionei valores como uma forma de tratar uma possivel nao passagem de parametros
    return a + b
}

console.log(soma()); //saida = 2
console.log(soma(2, 1)); //saida = 3
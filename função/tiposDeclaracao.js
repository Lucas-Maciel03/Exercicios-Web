console.log(soma(2,4))
//console.log(sub(2,4)) //erro pois vai dizer que a funcao sub so foi declarada na linha 11
//console.log(mult(2,4)) //erro pois vai dizer que a funcao sub so foi declarada na linha 16

//function declaration
function soma(a, b){  //declarando a funcao dessa forma é possivel chamar ela antes da declaracao
    return a + b     //pq o interpretador do js carrega primeiro as funções declaradas usando            function soma(a, b) e depois chama elas
}

//function expression
const sub = function (a, b){
    return a - b
}
console.log(sub(2,4))

//named function expression (funcao nomeada)
 const mult = function mult(a, b){
     return a * b
} //forma pouco usada 
console.log(mult(2,4))
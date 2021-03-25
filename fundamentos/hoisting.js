//o conceito de hosting é tipo jogar pra cimA. conceito: Hoisting em javaScript é o comportamaneto padrao de mover a declaração para o topo
console.log(a) //saida undefined
var a = 20
console.log(a) //saida 20
/*o que aconteceu nas linhas 2,3,4 foi:
* var a variaveal a foi declarada antes, mas nao inicializada pois isso saida undefined
* console.log(a) //saida undefined
* a = 20 //a foi inicializada com 20, por isso saida foi 20
* console.log(a) //saida 20
*/

// O EFEITO DE IÇAMENTO NAO FUNCIONA PARA VARIAVEIS DECLARADAS COMO LET
//console.log(b) //error
let b = 5
console.log(b)

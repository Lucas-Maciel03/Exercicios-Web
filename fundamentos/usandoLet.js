//variaveis declaradas com let tem escopo de funcao, bloco e global
let numero = 1
{
        console.log(numero) //imprime 1
    {
        console.log(numero) //imprime 1
        {
            let numero = 3
            console.log(numero) //imprime 3 pois foi declarado dentro do bloco
        }
            console.log(numero) //imprime 1
    }
}
console.log(numero) //imprime 1
function teste(){
    console.log("2", numero) //let declarado globalmente pode ser visto dentro de funções
    let b=9
    console.log(b)
}
//console.log(b) //erro, nao pode ser vista globalmente, pois foi declarada dentro de uma funçao
teste()
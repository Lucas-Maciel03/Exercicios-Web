//um array(vetor) em JS pode conter varios tipos de dado, porem nao é recomendado que se misture varios tipos de dados
const valores = [4.5, 3.9, 7.2, 8.8];
console.log(valores[3], valores[1]); //retorna os valores que estao no inidce 3 e 1
console.log(valores[4]); //retorna undefined pois nao tem valor nesse indice

valores[4] = 10; //adiciona um valor no indice 4 do array
console.log(valores);
console.log(valores.length); //retorna o tamanho do array

//adicionando valores em um array com o metodo push
valores.push({id: 3}, false, null, 'teste'); //adiciona valores no array
console.log(valores);

//deletando valores do array
console.log(valores.pop()); //remove o ultimo elemendo adicionado no array
//funcao delete remove um atributo de dentro de um objeto
delete valores[0]; //deleta valores do indice correspondente
console.log(valores);

//array em javaScript é um objeto
console.log(typeof valores);
const texto = "Lucas"

console.log(texto.charAt(4)); // exibe a letra do indice 4
console.log(texto.charAt(10)); //exibe em branco pois nao tem nada no indice 10
console.log(texto.charCodeAt(1)); //exibe o codigo html do caractere referente ao indice informado
console.log(texto.indexOf('c')); //exibe a posicao da letra informada, se nao existir print -1
console.log(texto.length); //exibe o tamanho da string

console.log(texto.substring(1));//printa na trla a partir do indice definido
console.log(texto.substring(1, 4)); //printa na tela a partir de um indice ate o fim definido-1

console.log('Esse é meu nome: ' .concat(texto).concat("!")) // concatenando com concat
console.log('Esse é meu nome: ' + texto + "!"); // concatenando com operador +
console.log(texto.replace('u', '7')) ;//troca a primeira letra por outra(letra, troca)

console.log("Lucas, Lorena, Maria, Ronaldo".split(',')); //corta uma string e transforma em um array, o corte é definido nos parametros(,)

console.log(texto.toLocaleLowerCase()); //transforma tudo em minusculo
console.log(texto.toLocaleUpperCase()); //transforma tudo em maiusculo
console.log(texto.toLowerCase()); //transforma tudo em minusculo
console.log(texto.endsWith('2')); //diz se uma string termina com uma letra especifica

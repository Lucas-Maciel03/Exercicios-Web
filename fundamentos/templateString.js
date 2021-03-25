const nome = "Lorena";
const concatenacao = "Meu nome é" + nome + '!';
const template = `
    Olá
    ${nome}!`
//O template usa a crase(``) e ela considera os espaços escritos
console.log(concatenacao, template);

//expressoes...
console.log(`1 + 1 = ${1+1}`);

//const uo = nomefuncao / texto = nomeVar / texto.toUpperCase() = maiusculo
const uo = texto => texto.toUpperCase();
console.log(`Ei... ${uo('cuidado')}!`)
//${nomefuncao(valorExpressao)}
//cuidado sera passado para a funcao da linha 11 e o texto sera convertido para maiusculo
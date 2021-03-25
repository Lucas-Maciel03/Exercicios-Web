console.log('!! Significa nao, está negando')
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("------------------------------------")
console.log('Os Verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'abc');
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isAtivo = true)); //atribui true a isAtivo e nega ele duas vzs

console.log("------------------------------------")

console.log('Os Falsos...');
console.log(!!0);
console.log(!!''); //strings vazias dao falso
console.log(!!null); 
console.log(!!NaN);
console.log(!!(isAtivo = false))//atribui false a isAtivo e nega ele duas vzs

console.log("------------------------------------")
console.log("Pra finalizar...");
console.log(!!('' || 0 || null || 'a')); // vai ver o unico verdadeiro e vai exibir true na tela
console.log(('' || 0 || null || 'a')); // vai ver o unico verdadeiro e vai exibir o valor na tela

console.log("------------------------------------")
let nome = '';
console.log(nome || 'Desconhecido'); // string vazia retorna false
nome = 'Lucas';
console.log(nome || 'Desconhecido'); //string preenchida retorna true

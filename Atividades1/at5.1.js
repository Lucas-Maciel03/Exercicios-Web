function formatar(valor){
     return v = valor.toFixed(2).toString().replace('.', ',')
}
//toFixed - casas decimais ** toString - passar pra string ** replace trocar valores

console.log(formatar(0.1 + 0.2))
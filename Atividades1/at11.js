function anoBissexto(ano){
    if(ano % 400 === 0){
        return true
    } else if(ano % 100 === 0){
        return false
    } else if(ano % 4 === 0){
        return true
    } else if(ano === 0){
        return false
    }
    else{
        return false
    }
}
console.log(anoBissexto(0))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
console.log(anoBissexto(2004))
console.log(anoBissexto(2005))
console.log(anoBissexto(2006))
console.log(anoBissexto(2007))
console.log(anoBissexto(2008))
console.log(anoBissexto(2010))
console.log(anoBissexto(2011))
console.log(anoBissexto(2412))
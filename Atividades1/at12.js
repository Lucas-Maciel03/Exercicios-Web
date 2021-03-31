function imprimirFatorial(a){
    if(a === 0){
        return 1
    } else{
        return a * imprimirFatorial(a - 1)
    }
}

console.log(imprimirFatorial(5))
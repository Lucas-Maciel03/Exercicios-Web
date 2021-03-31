const divisivel3 = a => {
    if(a % 3 === 0){
        return true
    } else{
        return false
    }
}
console.log(divisivel3(3))
console.log(divisivel3(10))
console.log(divisivel3(15))
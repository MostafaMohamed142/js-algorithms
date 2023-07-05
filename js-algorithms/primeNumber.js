// numbers greater than 1 and cannot be divided by another whole number rather than itself and 1

function isPrime(n){
    if (n < 2) {
        return false  
    }
    for (let i=2 ; i < n ; i++){
        if(n%i === 0 ){
            return false // not prime 4/2 not prime bec 4/1
        }
    }
    return true 
}
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))


// product of all postive number equal or less than a given number

function factorial(n){
    let result = 1;
    for(let i=2 ; i<=n;i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5))
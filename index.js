export function isPrime(num){
    const primes = []
    for(let i = 1; i != num+1; i++){
        const checkPrimes = []
        if(Number.isInteger(num / i) == true){
            for(let j = 1; j != i+1; j++){
                if(Number.isInteger(i / j) == true){
                    checkPrimes.push(j)
                }
            }
            if(checkPrimes.length == 2){
                primes.push(i)
            }
        }
    }
    if(primes.length >= 1){
        console.log("primes factors of " + num + " are " + primes)
    }else{
        console.log("primes factors of " + num + " are " + 0)
    }
}
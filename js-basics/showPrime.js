console.log(showPrime(20));

function showPrime(limit){
    let primeNumbers = [];
    
    if (typeof limit !== 'number')
        return;

    if (limit < 2)
        return;

    for (let number = 2; number < limit; number++)
        if (isPrime(number))
            primeNumbers.push(number);
    
    return primeNumbers;
}

function isPrime(number){
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}
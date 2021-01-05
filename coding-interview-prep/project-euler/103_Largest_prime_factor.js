/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

*/

function largestPrimeFactor(num) {

    var divisor = 2;
    let numQuot = num;
    let primeFactors = [];
    while (numQuot != 1) {
        if (numQuot % divisor == 0) {
            numQuot /= divisor;
            primeFactors.push(divisor);
        } else {
            divisor++;
        }
    }
    console.log(primeFactors);
    return primeFactors[primeFactors.length - 1]
}

console.log(largestPrimeFactor(13195));
// 13195 29
/*


the sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/

///first time it is worked ;)
function sumSquareDifference(n) {


    function getsumofthesquares(n) {
        // 12 + 22 + ... + 102 = 385

        var sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i * i
        }
        return sum;
    }

    function getsquareofthesum(n) {
        // (1 + 2 + ... + 10) 2 = 552 = 3025

        var sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum * sum;

    }

    var diff = getsquareofthesum(n) - getsumofthesquares(n);
    return diff;
}

console.log(sumSquareDifference(100));//25164150
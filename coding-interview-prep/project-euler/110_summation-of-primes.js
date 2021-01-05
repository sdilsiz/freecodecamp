/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.

primeSummation(17) should return a number.

primeSummation(17) should return 41.

primeSummation(2001) should return 277050.

primeSummation(140759) should return 873608362.

primeSummation(2000000) should return 142913828922.

*/


function primeSummation(num) {

    var prime_num1 = [],
        prime_num2 = [];
    for (var i = 0; i < num; i++) {
        prime_num2.push(true);
    }
    for (var i = 2; i <= num; i++) {
        if (prime_num2[i]) {
            prime_num1.push(i);
            for (var j = 1; i * j <= num; j++) {
                prime_num2[i * j] = false;
            }
        }
    }
    // console.log(prime_num1);
    // console.log(prime_num2);
    var sum = prime_num1.reduce(function (a, b) {
        return a + b;
    }, 0);

    return sum;
}

var s = primeSummation(17);
console.log(s);
//    142913828922
// 263296803374925

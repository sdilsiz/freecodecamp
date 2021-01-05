/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

*/


///first time it is worked ;)


function smallestMult(n) {

    var smallest = n;
    for (var i = 1; i < n; i++) {
        if (smallest % i == 0) {
            continue;
        } else {
            smallest += n;
            i = 1;
        }
    }
    return smallest;
}
console.log(smallestMult(20));
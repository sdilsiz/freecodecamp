/*
fiboEvenSum(10) should return a number.
Your function should return an even value.
Your function should sum the even-valued Fibonacci numbers: fiboEvenSum(8) should return 10.
fiboEvenSum(10) should return 10.
fiboEvenSum(34) should return 44.
fiboEvenSum(60) should return 44.
fiboEvenSum(1000) should return 798.
fiboEvenSum(100000) should return 60696.
fiboEvenSum(4000000) should return 4613732.
*/
function fiboEvenSum(number) {
    if (number <= 1) {
        return 0;
    } else {
        let evenSum = 0,
            prevFibNum = 1,
            // According to problem description our Fibonacci series starts with 1, 2
            fibNum = 2;
        for (let i = 2; fibNum <= number; i++) {
            if (fibNum % 2 == 0) {
                evenSum += fibNum;
            }
            [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
            console.log([prevFibNum, fibNum]);
            console.log("--------------");
            console.log([fibNum, prevFibNum + fibNum]);
        }
        return evenSum;
    }
}

console.log(fiboEvenSum(10));
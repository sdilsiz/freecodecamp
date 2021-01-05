function largeSum(arr) {

    // var sum = 0;
    // for (let x = 0; x < arr.length; x++) {
    //     var y = arr[x].slice(0, 10)
    //     console.log(y);
    //     sum += parseInt(y);

    // }

    let sum = arr.reduce((acc, item) => acc + Number(item), 0);   // 8.348422521139211e+49
    let str = sum.toString().split('e')[0];   // '8.348422521139211'
    return 1e+9 * str.slice(0, 11);   // 8348422521
    // return sum;
}

// Only change code above this line

const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(testNums));

// 8348422521
// 8348422520
// 8348422521
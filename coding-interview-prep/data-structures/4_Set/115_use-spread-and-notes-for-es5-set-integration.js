//#region tutorial
var set = new Set([1, 2, 3]);
var setToArr = [...set]
console.log(setToArr) // returns [ 1, 2, 3 ]
//#endregion

function checkSet(set) {
    // Only change code below this line
    var array = [...set];
    return array;
    // Only change code above this line
}



var x =checkSet(new Set([1, 2, 3, 4, 5, 6, 7]));
console.log(x);
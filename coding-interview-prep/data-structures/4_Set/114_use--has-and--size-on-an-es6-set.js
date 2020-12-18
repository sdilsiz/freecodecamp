function checkSet(arrToBeSet, checkValue) {

    // Only change code below this line
    var set = new Set(arrToBeSet);
    return [set.has(checkValue), checkValue];
    // Only change code above this line

}



console.log(checkSet([4, 5, 6], 3));
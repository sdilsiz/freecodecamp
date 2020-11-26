//#region tutorial

var set = new Set([1, 2, 3]);
set.delete(1);
console.log([...set]) // should return [ 2, 3 ]
//#endregion tutorial

function checkSet() {
    var set = new Set([1, 2, 3, 4, 5])
    set.delete(2);
    set.delete(5);;
    return set;
}
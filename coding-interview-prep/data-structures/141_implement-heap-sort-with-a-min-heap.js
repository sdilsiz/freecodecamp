function isSorted(a) {
    for (let i = 0; i < a.length - 1; i++)
        if (a[i] > a[i + 1])
            return false;
    return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5) {
    let a = new Array(size);
    for (let i = 0; i < size; i++)
        a[i] = Math.floor(Math.random() * 100);

    return a;
}
// const array = createRandomArray(5);
// const array1 = createRandomArray(4);
// console.log(array);
// console.log(array1);
// console.log(isSorted(array));
// console.log(isSorted(array1));
var MinHeap = function () {
    // Only change code below this line
    this.array = [];
    this.insert = function () {

    }
    this.remove = function () {

    }
    this.sort = function () {
        // return this.array.sort();
        // var arr=arr.filter(arr,1,1)
        return this.array.sort(function (a, b) {
            return a - b;
        });

    }
    // Only change code above this line
};



var newHeap = new MinHeap();

newHeap.array = createRandomArray(15);
console.log(newHeap.array);
console.log(newHeap.sort());

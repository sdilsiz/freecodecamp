var MaxHeap = function () {
    // Only change code below this line
    this.heap = [null];



    this.insert = function (ele) {
        // console.log(1);
        var index = this.heap.length;
        var arr = [...this.heap];
        arr.push(ele);

        while (ele > arr[Math.floor(index / 2)] && index > 1) {
            arr[index] = arr[Math.floor(index / 2)];
            arr[Math.floor(index / 2)] = ele;
            index = arr[Math.floor(index / 2)];
        }

        this.heap = arr;
    }

    this.print = () => {
        return this.heap.slice(1);
    }


    // Only change code above this line
};



var newHeap = new MaxHeap();

newHeap.heap = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];
newHeap.insert(3);
console.log(newHeap.print());

newHeap.insert(34);
console.log(newHeap.print());
/*
Step 1 − Create a new node at the end of heap.
Step 2 − Assign new value to the node.
Step 3 − Compare the value of this child node with its parent.
Step 4 − If value of parent is less than child, then swap them.
Step 5 − Repeat step 3 & 4 until Heap property holds.


*/
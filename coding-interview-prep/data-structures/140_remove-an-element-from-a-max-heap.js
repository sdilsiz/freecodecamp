
//TODO you must learn detail 
//https://forum.freecodecamp.org/t/remove-an-element-from-a-max-heap/416200
var MaxHeap = function () {
    // change code below this line
    this.array = new Array()
    this.array.push(null)

    this.insert = function (element) {
        this.array.push(element)
        let elementIdx = this.array.length - 1
        while (element > this.parent(elementIdx)) {
            if (this.parent(elementIdx) == null) {
                break
            }
            let temp = this.parent(elementIdx)
            this.array[this.parentIdx(elementIdx)] = this.array[elementIdx]
            this.array[elementIdx] = temp
            elementIdx = this.parentIdx(elementIdx)
        }
    }

    this.parent = function (idx) {
        return this.array[this.parentIdx(idx)]
    }

    this.parentIdx = function (idx) {
        return Math.floor(idx / 2)
    }

    this.print = function () {
        return this.array
    }

    this.remove = function () {
        let biggest = this.array[1]
        if (this.array.length <= 2) {
            this.array = [null]
        } else {
            //pop() function returns the last element of the array while also deleting it
            this.array[1] = this.array.pop()
            let idx = 1
            //condition is false if both children are smaller or out of range
            while (this.array[idx] < this.array[idx * 2] || this.array[idx] < this.array[idx * 2 + 1]) {
                //check if first child is bigger than second or second is out of range
                if (this.array[idx * 2] > this.array[idx * 2 + 1] || this.array[idx * 2 + 1] == undefined) {
                    let temp = this.array[idx * 2]
                    this.array[idx * 2] = this.array[idx]
                    this.array[idx] = temp
                    idx = idx * 2
                } else {
                    let temp = this.array[idx * 2 + 1]
                    this.array[idx * 2 + 1] = this.array[idx]
                    this.array[idx] = temp
                    idx = idx * 2 + 1
                }
            }
        }
        return biggest
    }
    // change code above this line
};
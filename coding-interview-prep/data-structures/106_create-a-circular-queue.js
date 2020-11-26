class CircularQueue {
    constructor(size) {
        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size - 1;

        while (size > 0) {
            this.queue.push(null);
            size--;
        }
    }

    print() {
        return this.queue;
    }

    enqueue(item) {
        // Only change code below this line
        if (this.queue[this.write] == null) {
            this.queue[this.write] = item;
            this.write++;
            if (this.write > this.max) {
                this.write = 0;
            }
            return item;
        }
        return null;

        // Only change code above this line
    }

    dequeue() {
        // Only change code below this line
        if (this.queue[this.read] != null) {
            let item = this.queue[this.read];
            this.queue[this.read++] = null;
            if (this.read > this.max) { this.read = 0; }
            return item;

        }
        return null;
        // Only change code above this line
    }
}


// var circular = new CircularQueue(5);
// circular.enqueue("a");
// circular.enqueue("b");
// circular.enqueue("c");
// circular.enqueue("d");
// circular.enqueue("e");
// circular.enqueue("f");
// console.log(circular.print());
// console.log(circular.dequeue());
// console.log(circular.print());
// console.log(circular.dequeue());
// console.log(circular.dequeue());

// console.log(circular.max);
// console.log(circular.print());
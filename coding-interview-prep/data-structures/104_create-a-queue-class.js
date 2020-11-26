function Queue() {
    var collection = [];

    this.print = function () {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function (val) {
        collection.push(val);
    }
    this.dequeue = function () {
        return collection.shift();
    }

    this.front = function () {
        return collection[0];
    }
    this.size = function () {
        return collection.length;
    }
    this.isEmpty = function () {
        return collection.length === 0;
    }

    // Only change code above this line
}
let queue=new Queue();
queue.collection=[1,2,3,"123"];
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");
queue.print();
console.log(queue.collection);
console.log(Queue.collection);
// console.log(queue.collection);
// console.log(Queue.isEmpty());
 
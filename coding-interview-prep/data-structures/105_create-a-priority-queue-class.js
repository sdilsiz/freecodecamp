function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (val) {
    this.collection.push(val);
    /*

     if (this.isEmpty()) {
      return this.collection.push(newitem);
    }

    this.collection = this.collection.reverse();
    var found_index = this.collection.findIndex(function (item) {
      return newitem[1] >= item[1];
    });
    if (found_index === -1) {
      this.collection.push(newitem);
    } else {
      this.collection.splice(found_index, 0, newitem);
    }
    this.collection = this.collection.reverse();
  };
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "The queue is empty.";
    }
    */
  }
  this.dequeue = function () {
    var x = this.collection.pop();
    return x[0];
  }

  this.front = function () {
    return this.collection[0][0];
  }
  this.size = function () {
    return this.collection.length;
  }

  this.isEmpty = function () {
    return this.collection.length === 0;
  }
  // Only change code above this line
}

var queue = new PriorityQueue();
queue.collection=[['kitten', 2], ['dog', 2], ['rabbit', 2]];
console.log(queue.collection);
var x = queue.dequeue();
console.log("dequeue=>",x);
// console.log(queue.collection);
// console.log(x);
// queue.collection = [['kitten', 2], ['dog', 2], ['rabbit', 2]];
// console.log(queue.collection);
// console.log(queue.front());
// console.log(queue.collection);